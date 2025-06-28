# Resume Directory

This directory contains the resume PDF file for the portfolio website.

## Current File
- `Manish_Bhamare_Resume.pdf` - Placeholder PDF file

## How to Replace with Your Actual Resume

1. **Replace the PDF file**: 
   - Delete the current `Manish_Bhamare_Resume.pdf` file
   - Add your actual resume PDF file with the same name: `Manish_Bhamare_Resume.pdf`
   - Or rename your resume file to `Manish_Bhamare_Resume.pdf`

2. **File Requirements**:
   - Format: PDF
   - Recommended size: Under 5MB for fast loading
   - Name: `Manish_Bhamare_Resume.pdf` (to match the code)

3. **Alternative Names**:
   If you want to use a different filename, update the path in:
   - `src/components/Hero.tsx` (line with `window.open('/resume/Manish_Bhamare_Resume.pdf', '_blank')`)

## File Structure
```
public/
└── resume/
    ├── Manish_Bhamare_Resume.pdf  # Your actual resume
    └── README.md                  # This file
```

The resume will be accessible at: `https://yourdomain.com/resume/Manish_Bhamare_Resume.pdf` 