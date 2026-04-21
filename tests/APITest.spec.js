import {test,expect} from '@playwright/test'

var userID;
test('GET', async({request}) =>{
    const response = await request.get('https://jsonplaceholder.typicode.com/posts')
    console.log(await response.json())
    expect (response.status()).toBe(200)

})

test('POST', async({request}) => {
    const response= await request.post('https://jsonplaceholder.typicode.com/posts',
    {data:{
        'title': 'foo',
        'body': 'bar',
        'userId': 1
    }})
    const res = await response.json()
    console.log(res)
    expect(response.status()).toBe(201)    
    userID = res.id
})

test('Update', async({request}) => {
    const response= await request.put( `https://jsonplaceholder.typicode.com/posts/${userID}`,
    {
        data:{
        'title': 'Xoo',
        'body': 'bar',
        'userId': 1
    }})
    //console.log(await response.json())
    //console.log(await response.text())
    expect(response.status()).toBe(200)
})

test('Delete', async({request}) => {
    const response= await request.delete('https://jsonplaceholder.typicode.com/posts/'+userID)
    expect(response.status()).toBe(200)
})