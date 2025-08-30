# minaxi-foundation
Description: foundation webpage

Repository: minaxi-foundation
Project Overview
A full-stack charity website for educational scholarships with admin panel, payment integration, and content management system.

Project Structure

minaxi-foundation/
├── client/ (React frontend)
├── server/ (Node.js backend)
├── shared/ (shared utilities/types)
└── deployment/ (CI/CD configs)

Detailed Structure

minaxi-foundation/
├── README.md
├── .gitignore
├── docker-compose.yml
├── package.json (root workspace)
│
├── client/                          # React Frontend
│   ├── public/
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   ├── manifest.json
│   │   └── assets/
│   │       ├── images/
│   │       ├── icons/
│   │       └── videos/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── Header/
│   │   │   │   │   ├── Header.js
│   │   │   │   │   └── Header.css
│   │   │   │   ├── Footer/
│   │   │   │   │   ├── Footer.js
│   │   │   │   │   └── Footer.css
│   │   │   │   ├── Layout/
│   │   │   │   │   ├── Layout.js
│   │   │   │   │   └── Layout.css
│   │   │   │   └── LoadingSpinner/
│   │   │   │       ├── LoadingSpinner.js
│   │   │   │       └── LoadingSpinner.css
│   │   │   ├── admin/
│   │   │   │   ├── AdminDashboard/
│   │   │   │   ├── ContentManager/
│   │   │   │   ├── ApplicationReviewer/
│   │   │   │   ├── UserManagement/
│   │   │   │   └── FinancialUploader/
│   │   │   ├── forms/
│   │   │   │   ├── ScholarshipForm/
│   │   │   │   ├── ContactForm/
│   │   │   │   └── PaymentForm/
│   │   │   └── ui/
│   │   │       ├── Button/
│   │   │       ├── Card/
│   │   │       ├── Modal/
│   │   │       └── Gallery/
│   │   ├── pages/
│   │   │   ├── Home/
│   │   │   │   ├── Home.js
│   │   │   │   └── Home.css
│   │   │   ├── About/
│   │   │   │   ├── About.js
│   │   │   │   └── About.css
│   │   │   ├── ScholarshipProgram/
│   │   │   │   ├── ScholarshipProgram.js
│   │   │   │   └── ScholarshipProgram.css
│   │   │   ├── ApplyScholarship/
│   │   │   │   ├── ApplyScholarship.js
│   │   │   │   └── ApplyScholarship.css
│   │   │   ├── BoardMembers/
│   │   │   │   ├── BoardMembers.js
│   │   │   │   └── BoardMembers.css
│   │   │   ├── Gallery/
│   │   │   │   ├── Gallery.js
│   │   │   │   └── Gallery.css
│   │   │   ├── FinancialTransparency/
│   │   │   │   ├── FinancialTransparency.js
│   │   │   │   └── FinancialTransparency.css
│   │   │   ├── Donate/
│   │   │   │   ├── Donate.js
│   │   │   │   └── Donate.css
│   │   │   ├── Contact/
│   │   │   │   ├── Contact.js
│   │   │   │   └── Contact.css
│   │   │   ├── Privacy/
│   │   │   │   ├── Privacy.js
│   │   │   │   └── Privacy.css
│   │   │   └── Admin/
│   │   │       ├── Login/
│   │   │       ├── Dashboard/
│   │   │       └── ManageContent/
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   ├── auth.js
│   │   │   ├── upload.js
│   │   │   └── payments.js
│   │   ├── utils/
│   │   │   ├── constants.js
│   │   │   ├── helpers.js
│   │   │   └── validators.js
│   │   ├── hooks/
│   │   │   ├── useAuth.js
│   │   │   ├── useApi.js
│   │   │   └── useLocalStorage.js
│   │   ├── context/
│   │   │   ├── AuthContext.js
│   │   │   └── ThemeContext.js
│   │   ├── styles/
│   │   │   ├── globals.css
│   │   │   ├── variables.css
│   │   │   └── responsive.css
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── package.json
│   └── .env.example
│
├── server/                          # Node.js Backend
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── applicationController.js
│   │   │   ├── contentController.js
│   │   │   ├── paymentController.js
│   │   │   ├── userController.js
│   │   │   └── fileController.js
│   │   ├── middleware/
│   │   │   ├── auth.js
│   │   │   ├── upload.js
│   │   │   ├── validation.js
│   │   │   ├── rateLimiter.js
│   │   │   └── errorHandler.js
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── Application.js
│   │   │   ├── Content.js
│   │   │   ├── Payment.js
│   │   │   ├── BoardMember.js
│   │   │   └── FinancialReport.js
│   │   ├── routes/
│   │   │   ├── auth.js
│   │   │   ├── applications.js
│   │   │   ├── content.js
│   │   │   ├── payments.js
│   │   │   ├── admin.js
│   │   │   └── public.js
│   │   ├── services/
│   │   │   ├── emailService.js
│   │   │   ├── fileService.js
│   │   │   ├── paymentService.js
│   │   │   └── youtubeService.js
│   │   ├── utils/
│   │   │   ├── database.js
│   │   │   ├── logger.js
│   │   │   ├── helpers.js
│   │   │   └── validators.js
│   │   ├── config/
│   │   │   ├── database.js
│   │   │   ├── email.js
│   │   │   ├── cloudinary.js
│   │   │   └── payment.js
│   │   └── app.js
│   ├── uploads/                     # Temporary file uploads
│   ├── package.json
│   ├── .env.example
│   └── server.js
│
├── shared/                          # Shared utilities
│   ├── constants/
│   │   ├── roles.js
│   │   ├── status.js
│   │   └── api.js
│   ├── types/
│   │   ├── user.js
│   │   └── application.js
│   └── utils/
│       ├── validation.js
│       └── formatting.js
│
├── deployment/                      # CI/CD and deployment
│   ├── docker/
│   │   ├── Dockerfile.client
│   │   ├── Dockerfile.server
│   │   └── nginx.conf
│   ├── github-actions/
│   │   ├── ci.yml
│   │   ├── deploy-staging.yml
│   │   └── deploy-production.yml
│   ├── netlify/
│   │   ├── _redirects
│   │   └── netlify.toml
│   └── railway/
│       ├── railway.toml
│       └── start.sh
│
├── docs/                           # Documentation
│   ├── API.md
│   ├── DEPLOYMENT.md
│   ├── USER_ROLES.md
│   └── CONTRIBUTING.md
│
└── scripts/                        # Utility scripts
    ├── setup.sh
    ├── seed-database.js
    └── backup.js


Design Theme: Pastel Colors for India

:root {
  /* Primary Colors */
  --primary-orange: #FFE5B4;      /* Soft saffron */
  --primary-green: #B8E6B8;       /* Sage green */
  --primary-blue: #A8D5E5;        /* Sky blue */
  
  /* Accent Colors */
  --accent-coral: #FFB3BA;        /* Soft coral */
  --accent-lavender: #D4B5E8;     /* Light lavender */
  --accent-mint: #B5F2D4;         /* Mint green */
  
  /* Neutral Colors */
  --white: #FFFFFF;
  --off-white: #FAFAFA;
  --light-gray: #F5F5F5;
  --medium-gray: #E0E0E0;
  --dark-gray: #757575;
  --text-dark: #333333;
}


1. Super Admin (Full Access)

Manage all users and roles
Upload/manage all content
Access financial reports
System configuration

2. Content Manager (Content Only)

Upload photos and videos
Manage gallery content
Update board member information
Manage YouTube video links

3. Application Reviewer (Applications Only)

Review scholarship applications
Update application status
Generate application reports
Export application data

4. Financial Manager (Financial Only)

Upload financial statements
Manage audit reports
Access payment records
Generate financial reports

5. Public User (Read Only)

View public content
Apply for scholarships
Make donations
Contact form submissions

Database Schema

Users Collection

{
  _id: ObjectId,
  name: String,
  email: String,
  password: String (hashed),
  role: String, // 'super_admin', 'content_manager', 'application_reviewer', 'financial_manager'
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}

Applications Collection

{
  _id: ObjectId,
  personalInfo: {
    fullName: String,
    dateOfBirth: Date,
    fatherName: String,
    motherName: String,
    address: Object,
    phoneNumber: String,
    email: String,
    aadharNumber: String
  },
  academicInfo: {
    currentClass: String,
    school: String,
    previousMarks: Number,
    stream: String
  },
  financialInfo: {
    familyIncome: Number,
    fatherOccupation: String,
    motherOccupation: String,
    reason: String
  },
  documents: {
    photo: String,
    incomeProof: String,
    marksSheet: String,
    aadharCopy: String
  },
  status: String, // 'pending', 'under_review', 'approved', 'rejected'
  reviewNotes: String,
  reviewedBy: ObjectId,
  createdAt: Date,
  updatedAt: Date
}

Content Collection

{
  _id: ObjectId,
  type: String, // 'photo', 'youtube_video', 'document'
  title: String,
  description: String,
  url: String, // Cloudinary URL or YouTube URL
  category: String, // 'gallery', 'testimonial', 'financial'
  isPublic: Boolean,
  uploadedBy: ObjectId,
  createdAt: Date
}

Board Members Collection

{
  _id: ObjectId,
  name: String,
  position: String,
  bio: String,
  qualifications: [String],
  photo: String,
  email: String,
  order: Number,
  isActive: Boolean
}

Payments Collection

{
  _id: ObjectId,
  donorName: String,
  email: String,
  amount: Number,
  currency: String,
  paymentMethod: String,
  transactionId: String,
  status: String,
  message: String,
  createdAt: Date
}

Deployment Strategy
Frontend (Client)

Platform: Netlify or Vercel
Build Command: npm run build
Publish Directory: build/
Custom Domain: minaxi-gajjar.org

Backend (Server)

Platform: Railway or Render
Environment: Node.js 18+
Database: MongoDB Atlas (Free Tier)
File Storage: Cloudinary (Free Tier)

CI/CD Pipeline

GitHub Actions for automated testing
Staging Environment for testing
Production Deployment on push to main branch

🔧 Technology Stack
Frontend

React 18 with Hooks
React Router for navigation
Axios for API calls
React Hook Form for forms
CSS Modules for styling

Backend

Node.js with Express
MongoDB with Mongoose
JWT for authentication
Multer for file uploads
Nodemailer for emails
bcryptjs for password hashing

Additional Services

Cloudinary for image/video storage
PayPal SDK for payments
Google Pay API for payments
YouTube API for video integration
Google Maps API for location

📋 Development Phases
Phase 1: Core Setup (Day 1)

 Project structure creation
 Database setup
 Authentication system
 Basic routing

Phase 2: Public Pages (Day 1-2)

 Home page
 About page
 Contact page with Google Maps
 Board members page
 Privacy policy

Phase 3: Application System (Day 2)

 Scholarship application form
 File upload functionality
 Email notifications
 Application status tracking

Phase 4: Admin Panel (Day 2)

 Admin authentication
 Content management
 Application review system
 User management

Phase 5: Payment Integration (Day 2)

 PayPal integration
 Google Pay integration
 QR code generation
 Payment tracking

Phase 6: Gallery & Content (Day 2)

 Photo gallery
 YouTube video integration
 Financial reports upload
 Content categorization

Phase 7: Deployment (Day 2)

 CI/CD setup
 Production deployment
 Domain configuration
 SSL certificate

🔒 Security Features

JWT token authentication
Role-based access control
File upload validation
Rate limiting
Input sanitization
CORS configuration
Environment variables protection

📱 Mobile Responsiveness

Mobile-first design approach
Touch-friendly interfaces
Optimized images for mobile
Fast loading on slow connections

