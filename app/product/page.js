async function getData(){
    let res = await fetch('https://dummyjson.com/products')
    let json = await res.json()
    return json['products']
}

const page = async () => {

    let data = await getData()

    return (
        <div>
            <h1 className='my-color'>Product Page</h1>
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