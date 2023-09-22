import {createClient} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
	projectId:'6sk1c0j4',
	dataset:'production',
	apiVersion:'2023-05-03',
	useCdn:false
})

const builder = imageUrlBuilder(client)

export function urlFor(source:any) {
  return builder.image(source)
}