import Menu from "@/components/Menu";

async function getData(){
    let res = await fetch('https://dummyjson.com/products')
    let json = await res.json()
    return json['products']
}

const page = async ({searchParams}) => {

    let data = await getData()

    return (
        <div>
            <Menu></Menu>
            <h1 className='my-color'>Product Page</h1>
            <p>{searchParams.name} <span>$ {searchParams.price}</span></p>


            <p>Server Side Rendering - SSR</p>
            {
                data.map((item, key) => {
                    return <div key={key}>
                        <h2>{item['title']}</h2>
                    </div>
                })
            }
        </div>
    );
};

export default page;