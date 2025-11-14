
'use server'

import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  message: z.string().min(1, { message: 'Message is required' }),
})

export async function saveContactRequest(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Error: Please check your input.'
    }
  }

  // Here you would typically save the data to a database
  console.log('New contact request:', validatedFields.data);

  return { message: 'Your message has been sent successfully!' }
}
