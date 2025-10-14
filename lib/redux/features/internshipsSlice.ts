import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export interface Internship {
  id: number
  title: string
  company: string
  location: string
  stipend: string
  type: string
  duration: string
  tags: string[]
  postedAt: string
}

export interface InternshipsState {
  items: Internship[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
  query: string
  location: string
  type: string
}

// Dummy internships data
const dummyInternships: Internship[] = [
  { id: 1, title: "Frontend Developer Intern", company: "Aviraj Infotech", location: "Remote", type: "Internship", stipend: "₹10,000 / month", duration: "3 months", postedAt: "2 days ago", tags: ["React", "JavaScript", "CSS"] },
  { id: 2, title: "Data Analyst Intern", company: "TechNova Analytics", location: "Bengaluru", type: "Internship", stipend: "₹12,000 / month", duration: "6 months", postedAt: "5 days ago", tags: ["Python", "Excel", "SQL"] },
  { id: 3, title: "UI/UX Design Intern", company: "DesignStudio", location: "Pune", type: "Internship", stipend: "₹8,000 / month", duration: "4 months", postedAt: "1 week ago", tags: ["Figma", "Prototyping", "User Research"] },
  { id: 4, title: "Backend Developer Intern", company: "CodeCrafters", location: "Mumbai", type: "Internship", stipend: "₹15,000 / month", duration: "6 months", postedAt: "3 days ago", tags: ["Node.js", "Express", "MongoDB"] },
  { id: 5, title: "Machine Learning Intern", company: "AI Labs", location: "Remote", type: "Internship", stipend: "₹20,000 / month", duration: "6 months", postedAt: "6 days ago", tags: ["Python", "TensorFlow", "ML"] },
  { id: 6, title: "Marketing Intern", company: "BrandHive", location: "Delhi", type: "Internship", stipend: "₹7,000 / month", duration: "3 months", postedAt: "2 weeks ago", tags: ["SEO", "Content Marketing", "Social Media"] },
  { id: 7, title: "Full Stack Developer Intern", company: "TechWave", location: "Bengaluru", type: "Internship", stipend: "₹18,000 / month", duration: "6 months", postedAt: "1 day ago", tags: ["React", "Node.js", "MongoDB"] },
  { id: 8, title: "Graphic Design Intern", company: "Creative Minds", location: "Chennai", type: "Internship", stipend: "₹6,000 / month", duration: "3 months", postedAt: "4 days ago", tags: ["Photoshop", "Illustrator", "Figma"] },
  { id: 9, title: "Business Analyst Intern", company: "BizSolutions", location: "Hyderabad", type: "Internship", stipend: "₹9,000 / month", duration: "4 months", postedAt: "5 days ago", tags: ["Excel", "SQL", "PowerBI"] },
  { id: 10, title: "Content Writing Intern", company: "WriteRight", location: "Remote", type: "Internship", stipend: "₹5,000 / month", duration: "3 months", postedAt: "1 week ago", tags: ["Copywriting", "Blogging", "SEO"] },
  { id: 11, title: "Data Science Intern", company: "DataQuest", location: "Pune", type: "Internship", stipend: "₹15,000 / month", duration: "6 months", postedAt: "3 days ago", tags: ["Python", "Pandas", "Machine Learning"] },
  { id: 12, title: "Cybersecurity Intern", company: "SecureNet", location: "Mumbai", type: "Internship", stipend: "₹12,000 / month", duration: "6 months", postedAt: "2 days ago", tags: ["Network Security", "Ethical Hacking", "Python"] },
  { id: 13, title: "Product Management Intern", company: "ProdMasters", location: "Delhi", type: "Internship", stipend: "₹14,000 / month", duration: "6 months", postedAt: "6 days ago", tags: ["Agile", "Roadmap", "User Research"] },
  { id: 14, title: "DevOps Intern", company: "CloudOps", location: "Bengaluru", type: "Internship", stipend: "₹16,000 / month", duration: "6 months", postedAt: "4 days ago", tags: ["AWS", "Docker", "CI/CD"] },
  { id: 15, title: "Mobile App Development Intern", company: "AppWorks", location: "Remote", type: "Internship", stipend: "₹13,000 / month", duration: "6 months", postedAt: "1 week ago", tags: ["Flutter", "React Native", "Dart"] },
  { id: 16, title: "Digital Marketing Intern", company: "Marketify", location: "Chennai", type: "Internship", stipend: "₹8,000 / month", duration: "3 months", postedAt: "2 days ago", tags: ["Google Ads", "SEO", "Social Media"] },
  { id: 17, title: "QA Testing Intern", company: "TestLab", location: "Hyderabad", type: "Internship", stipend: "₹9,000 / month", duration: "4 months", postedAt: "5 days ago", tags: ["Selenium", "Manual Testing", "Automation"] },
  { id: 18, title: "Frontend React Intern", company: "WebCraft", location: "Remote", type: "Internship", stipend: "₹11,000 / month", duration: "4 months", postedAt: "3 days ago", tags: ["React", "CSS", "HTML"] },
  { id: 19, title: "Business Development Intern", company: "GrowthHub", location: "Bengaluru", type: "Internship", stipend: "₹7,000 / month", duration: "3 months", postedAt: "6 days ago", tags: ["Sales", "CRM", "Lead Generation"] },
  { id: 20, title: "AI Research Intern", company: "NextGen AI", location: "Pune", type: "Internship", stipend: "₹22,000 / month", duration: "6 months", postedAt: "2 days ago", tags: ["Python", "Deep Learning", "TensorFlow"] },
]

const initialState: InternshipsState = {
  items: dummyInternships,
  status: 'idle',
  error: null,
  query: '',
  location: '',
  type: ''
}

// Async thunk for fetching internships
export const fetchInternships = createAsyncThunk(
  'internships/fetchInternships',
  async (_params: { q?: string; location?: string; type?: string }) => {
    try {
      // In a real app, this would be an API call
      const response = await fetch('/api/internships')
      if (!response.ok) {
        throw new Error('Failed to fetch internships')
      }
      return await response.json()
    } catch {
      // Return dummy data on error
      return dummyInternships
    }
  }
)

const internshipsSlice = createSlice({
  name: 'internships',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload
    },
    setLocation: (state, action) => {
      state.location = action.payload
    },
    setType: (state, action) => {
      state.type = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInternships.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchInternships.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
      })
      .addCase(fetchInternships.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || 'Failed to fetch internships'
      })
  }
})

export const { setQuery, setLocation, setType } = internshipsSlice.actions
export default internshipsSlice.reducer
