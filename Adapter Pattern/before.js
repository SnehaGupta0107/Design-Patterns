// Third-party API with incompatible data format
class ThirdPartyAPI {
    getUserData() {
        return {
            firstName: "John",
            lastName: "Doe",
            birthDate: "1990-01-01"
        };
    }
}

// Application function that expects a different format
function displayUser(user) {
    console.log(`Name: ${user.fullName}, Age: ${user.age}`);
}

// Using the third-party API without an adapter
const api = new ThirdPartyAPI();
const data = api.getUserData();

// Manually transforming data every time it's used
const user = {
    fullName: `${data.firstName} ${data.lastName}`,
    age: new Date().getFullYear() - new Date(data.birthDate).getFullYear()
};

displayUser(user);  // Output: Name: John Doe, Age: 34
