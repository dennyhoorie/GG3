const fruits = [
    'Mangga: Kuning',
    'Apel: Merah',
    'Alpukat: Hijau',
    'Anggur: Ungu',
    'Pisang: Kuning'
]

export default function List(){
    const listItems = fruit.map(fruit => <li>{fruit}</li>)
};

return <ul>{listItems}</ul>

const family = [
    {
        id: 0,
        name: 'Papa Shark',
        gender: 'male'
    },
    {
        id: 1,
        name: 'Mama Shark',
        gender: 'female'
    },
    {
        id: 2,
        name: 'Teenager Shark',
        gender: 'male'
    },
    {
        id: 3,
        name: 'Baby Shark',
        gender: 'female'
    }
]

export default function List(){
    const femaleMembers = family.filter(member =>
        member.gender === 'female'
        );

      const listItems = femaleMembers.map(member =>
        <li>
            {member.name}
        </li>
      )  

      return <ul>{listItems}</ul>
}