




export default async function UserP({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  return <h1>Product ID: {id}</h1>;
}
// export default async function UserDetailPage(
//   {
//    params
//  }:{
//     params: Promise<{id:number}>
// }){
//   const {id}= await params;
//   // console.log(`Typeof iD : ${typeof id}`)
//    return (
//     <h1>User ID: {id}</h1>
//    )
// }

// // function number(...a){
// return a;
// }
// 1,2,3,4,5,6,
// number(12,23675.4324,343)