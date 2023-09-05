import { createProduct } from './services/Api.js'

const PRODUCTS_DEFAULT_DATA = [
    {
        Title: 'Gibson Les Paul 50s',
        Description: 'Returning to the roots of a classic, this Les Paul Standard 50s Figured Top electric guitar oozes authenticity and serves as a reminder of Gibsons history of innovation. The traditional figured maple on mahogany construction and 50s neck profile bear a gorgeous nitro lacquer finish for that legendary look.',
    },
    {
        Title: 'Gibson Les Paul',
        Description: 'This Gibson Les Paul Standard 60s Figured Top electric guitar replicates the historic models adopted by some of the most legendary players of all time. It features a solid mahogany body with a AA figured maple top, and its mahogany neck has a 60s-style SlimTaper profile. ',
    },
    {
        Title: 'Yamaha F335 Acoustic',
        Description: 'The F335 acoustic guitar from Yamaha is a stellar blend of quality, playability and affordability that offers an appealing option for both beginners and seasoned musicians alike. Its dreadnought body features a laminated spruce top complemented by meranti back and sides, delivering a warm, full-bodied tone with excellent projection. The guitars comfortable rosewood fingerboard and nato neck enhance playability, while the durable finish and attractive soundhole rosette add visual appeal.',
    },
    {
        Title: 'Fender American Ultra',
        Description: 'The Fender American Ultra Telecaster redefines what an electric guitar can achieve. Featuring Fenders most advanced innovations, this Tele is crafted for players who demand the utmost in tone, feel and versatility. The unique Modern D neck profile with rolled fingerboard edges provides endless hours of playing comfort, while the tapered neck heel allows effortless access across all 22 medium jumbo frets.',
    }
]

const seedData = async() => {
    PRODUCTS_DEFAULT_DATA.map(async (product) => {
        await createProduct({ data: { data: product} })
    })
}

seedData()
