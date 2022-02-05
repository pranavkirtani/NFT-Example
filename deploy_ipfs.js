
const NFT=require("nft.storage");
const ipfs_car=require("ipfs-car/pack")
const fs=require("fs")
let NFTStorage=NFT.NFTStorage
let File=NFT.File;

let pack=ipfs_car.pack
const apiKey = ''
const client = new NFTStorage({ token: apiKey })
async function main() {
const metadata = await client.store({
  name: 'Bird',
  description: 'Free for use Image from Pixabay',
  image: new File([await fs.promises.readFile('./bird.jpg')], 'bird.jpg', { type: 'image/jpg' })
})
console.log(metadata.url)

};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
