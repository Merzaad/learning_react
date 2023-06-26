import { testChunkNested } from '../modules/testChunk'
/* import testChunkNested from '../modules/testChunk' */

export default function TestChunk() {
  const someData = testChunkNested()
  console.log(someData)
  return null
}
