import './style.css'
const user = {
    name: 'Maria Sklodowska-Curie',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c._1920s.jpg/1200px-Marie_Curie_c._1920s.jpg',
    imageSizeL: 90,

};

export default function Avatar(){
    return(
        <>
        <h1 className='avatar_username'>Hello, {user.name} </h1>
        <img className='avatar_image' src={user.imageUrl} />
        </>
    );
}

// export default function Profile(){
//     return(
//         <Avatar
//         person=({ name: 'Maria Sklodowska-Curie', iamgeurl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c._1920s.jpg/1200px-Marie_Curie_c._1920s.jpg'})
//         size={100}
//         />
//     );

// }

// function Item({name, isPacked}){
//     if(isPacked){
//         return <l1 className="Item">{name} v</l1>;
//     }
// }

// export default function PackingList(){
//         return(
//             <section>
//                 <h1>girl list</h1>
//                 <ul>
//                     <item 
//                     isPacked={true}
//                     name="spacesuit"
//                     />

//                     <item 
//                     isPacked={true}
//                     name="helmet"
//                     />


//                 </ul>
//             </section>
//         )
// }

