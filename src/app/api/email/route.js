// import nodemailer from 'nodemailer'

// export async function POST(req) {
//     try {
//         const body = await req.json()
//         const { name, email, shopName, number } = body

//         const transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: process.env.EMAIL_USER,
//                 pass: process.env.EMAIL_PASS,
//             },
//         })

//         await transporter.sendMail({
//             from: process.env.EMAIL_USER,
//             to: process.env.EMAIL_USER,
//             subject: 'New Form Submission',
//             html: `<p><strong>Name:</strong> ${name}</p> <p><strong>Shop Name:</strong> ${shopName}</p> <p><strong>Number:</strong> ${number}</p> <p><strong>Email:</strong> ${email}</p>`,
//         })


//         return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
//             status: 200,
//         })
//     } catch (error) {
//         console.error(error)
//         return new Response(JSON.stringify({ error: 'Email failed' }), {
//             status: 500,
//         })
//     }
// }


import nodemailer from 'nodemailer'

export async function POST(req) {
    try {
        const body = await req.json()
        const { name, email, shopName, number, finalShopDesign } = body

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        })
        const fullParams = {
            name,
            email,
            shopName,
            number,
            ...finalShopDesign
        };
        const queryString = new URLSearchParams(fullParams).toString();

        // Send email to the admin
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: 'New Form Submission',
            html: `<p><strong>Name:</strong> ${name}</p> 
                   <p><strong>Shop Name:</strong> ${shopName}</p> 
                   <p><strong>Number:</strong> ${number}</p> 
                   <p><strong>Email:</strong> ${email}</p>
                   <ul>
            <li><strong>Banner Text:</strong> ${finalShopDesign?.bane}</li>
            <li><strong>Background Color:</strong> ${finalShopDesign?.bgColor}</li>
            <li><strong>Text Color:</strong> ${finalShopDesign?.textColor}</li>
            <li><strong>Font Family:</strong> ${finalShopDesign?.fontFamily}</li>
            <li><strong>Text Size:</strong> ${finalShopDesign?.textSize}</li>
            <li><strong>Width:</strong> ${finalShopDesign?.selectWidth}</li>
            <li><strong>Height:</strong> ${finalShopDesign?.selectHeight}</li>
        </ul>
       <p><strong>View Your Design:</strong> 
      <a href="http://localhost:3000/view/shopSign?${queryString}" target="_blank">Click here to view your shop sign</a>
    </p>`,
        })

        // Send confirmation email to the user
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Form Submission Confirmation',
            html: `<p>Hi ${name},</p>
                   <p>Thank you for submitting the form. We have received your information and will get back to you shortly.</p>
                   <p><strong>Shop Name:</strong> ${shopName}</p>
                   <p><strong>Phone Number:</strong> ${number}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>View Your Design:</strong> 
      <a href="http://localhost:3000/view/shopSign?${queryString}" target="_blank">Click here to view your shop sign</a>
    </p>
                   <p>Best regards,</p>
                   <p>Signs Vivid</p>
                   
                   `,
        })

        return new Response(JSON.stringify({ message: 'Emails sent successfully' }), {
            status: 200,
        })
    } catch (error) {
        console.error(error)
        return new Response(JSON.stringify({ error: 'Email failed' }), {
            status: 500,
        })
    }
}
