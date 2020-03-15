const functions = require('./functions')

// beforeEach(() => initDatabase())
// afterEach(() => closeDatabase())

// beforeAll(() => initDatabase())
// afterAll(() => closeDatabase())

// const initDatabase = () => console.log('Database Initialized...')
// const closeDatabase = () => console.log('Database Closed...')

const nameCheck = () => console.log('Cheking Name...')

describe('Cheking Names', () => {
    beforeEach(() => nameCheck())

    test('User is Jack', () => {
        const user = 'Jack'
        expect(user).toBe('Jack')
    })

    test('User is Karen', () => {
        const user = 'Karen'
        expect(user).toBe('Karen')
    })
})

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4)
});

test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5)
});

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

test('User Should be Marcos Ribeiro object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Marcos',
        lastName: 'Ribeiro'
    });
});

test('Should be under 1600', () => {
    expect(functions.load(800, 700)).toBeLessThan(1600);
});

test('Should be under or equal 1600', () => {
    expect(functions.load(800, 800)).toBeLessThanOrEqual(1600);
});

test('Should be over 1600', () => {
    expect(functions.load(800, 700)).toBeGreaterThan(1400);
});

test('Should be over or equal 1600', () => {
    expect(functions.load(800, 800)).toBeGreaterThanOrEqual(1600);
});

// Regex
test('There is no E in team', () => {
    expect('team').not.toMatch(/E/);
});

test('There is e in team', () => {
    expect('team').toMatch(/e/);
});

// case insensitive
test('There is e in team', () => {
    expect('team').toMatch(/E/i);
});

// Arrays
test('Admin should be in usernames', () => {
    usernames = ['John', 'Karen', 'admin'];
    expect(usernames).toContain('admin')
})

// Working with async data
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    
    return functions.fetchUser().then(data => {
        expect(data.name).toEqual('Leanne Graham');
    })
})

// Working with async await data 
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
})

