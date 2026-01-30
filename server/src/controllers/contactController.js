import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

// Mock database for contacts (in a real app, this would be a proper database)
const contacts = []

// Configure mail transporter using env vars
const smtpHost = process.env.SMTP_HOST
const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined
const smtpUser = process.env.SMTP_USER
const smtpPass = process.env.SMTP_PASS
const adminEmail = process.env.ADMIN_EMAIL || 'sketchtechsolutions@gmail.com'

let transporter = null
if (smtpHost && smtpPort && smtpUser && smtpPass) {
  transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465, // true for 465, false for other ports
    auth: {
      user: smtpUser,
      pass: smtpPass
    }
  })
} else {
  console.warn('SMTP not fully configured. Emails will not be sent. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS.')
}

// Submit contact form
export const submitContact = async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body

    // Validation
    if (!name || !email || !service || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please provide all required fields'
      })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email format'
      })
    }

    // Create contact object
    const contact = {
      id: Date.now(),
      name,
      email,
      phone,
      service,
      message,
      createdAt: new Date(),
      status: 'New'
    }

    // Save to mock database
    contacts.push(contact)

    // Send email notification to admin (if transporter configured)
    try {
      if (transporter) {
        const mailOptions = {
          from: `${contact.name} <${contact.email}>`,
          to: adminEmail,
          subject: `New contact: ${contact.name} — ${contact.service}`,
          text: `You have a new contact submission:\n\nName: ${contact.name}\nEmail: ${contact.email}\nPhone: ${contact.phone || 'N/A'}\nService: ${contact.service}\nMessage:\n${contact.message}\n\nReceived: ${contact.createdAt}`
        }

        await transporter.sendMail(mailOptions)
        console.log('Notification email sent to', adminEmail)
      } else {
        console.log('New contact submission (email not sent, transporter not configured):', contact)
      }
    } catch (mailErr) {
      console.error('Failed to send notification email:', mailErr)
    }

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully! We will get back to you soon.',
      data: { id: contact.id }
    })
  } catch (error) {
    console.error('Error submitting contact:', error)
    res.status(500).json({
      success: false,
      error: 'Error submitting contact form'
    })
  }
}

// Get all contacts (admin endpoint - in production, should be protected)
export const getContacts = (req, res) => {
  try {
    res.json({
      success: true,
      data: contacts
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error fetching contacts'
    })
  }
}
