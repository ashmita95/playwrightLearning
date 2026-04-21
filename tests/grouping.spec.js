import {test,expect} from '@playwright/test'

test.beforeAll(async()=>{
    console.log('this is before all hooks...')
})

test.afterAll(async()=>{
    console.log('this is after all hooks...')
})

test.beforeEach(async()=>{
    console.log('this is before each hooks...')
})

test.afterEach(async()=>{
    console.log('this is after each hooks...')
})
test.describe('group 1',()=>{

    test('test1', async ({page}) =>{
        console.log('this is test 1...')
    })
    
    test('test2', async ({page}) =>{
        console.log('this is test 2...')
    })

})

test.describe.only('group2',()=>{
    test('test3', async ({page}) =>{
        console.log('this is test 3...')
    })
    
})


