import { PrismaClient } from '@prisma/client'
import { randomInt } from 'node:crypto'

const prisma = new PrismaClient()

const name = 'Lorem ipsum dolor amet consectetur'
const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices feugiat volutpat elementum sed donec bibendum vitae tincidunt. Quis eget ornare amet massa eu at ipsum. Augue purus ante ultrices dictum integer sagittis sem leo. Maecenas suspendisse ipsum purus bibendum maecenas faucibus risus, semper. Aliquet potenti neque semper dui aliquet. Imperdiet lectus id sed pharetra nunc, proin. Ultrices varius rhoncus facilisi condimentum habitant rhoncus ac. Vivamus varius gravida urna viverra in. Aliquet amet dictum malesuada sapien morbi est interdum. Tincidunt nunc convallis nullam lorem eu elementum interdum. Ut ultrices suscipit dolor lorem consequat ac nibh justo. Viverra quam nunc risus urna. Pharetra vestibulum diam praesent consequat consequat fermentum nunc.'
const amenities = ['Passagem Aérea', 'Wi-fi', 'Café de manhã', 'Quarto']
const images = [
  'https://i.postimg.cc/NGydj1QZ/image-1.png',
  'https://i.postimg.cc/9fJLrbRH/image-2.png',
  'https://i.postimg.cc/kG9Nsttv/image-3.png',
  'https://i.postimg.cc/wBmhdkXk/image-4.png',
  'https://i.postimg.cc/mZXh8HMZ/image-5.png',
  'https://i.postimg.cc/RCy4WQKt/image-6.png'
]

const seedQuantity = 30

async function main() {
  const date = new Date()

  for (let i = 0; i <= seedQuantity; i++) {
    await prisma.ticket.create({
      data: {
        name: `Ticket ${i + 1} ${name}`,
        description,
        imageUrl: images[i] ?? images[randomInt(0, 5)],
        amenities,
        reviews: { create: [{ value: 7 }, { value: 3.4 }, { value: 8.5 }] },
        price: { create: { originalValue: 2351.28, discount: 960, value: 1391.28 } },
        address: { create: { city: 'GetYourGuide Tours & Tickets Gmbh', state: 'São Paulo', country: 'Brazil' } },
        createdAt: new Date(date.getTime() + (i * 10))
      }
    })
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
