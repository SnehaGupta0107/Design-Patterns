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

// Adapter class to standardize the data format
class UserAdapter {
    constructor(api) {
        this.api = api;
    }

    getUser() {
        const data = this.api.getUserData();
        // Transform the data to the format our application expects
        return {
            fullName: `${data.firstName} ${data.lastName}`,
            age: new Date().getFullYear() - new Date(data.birthDate).getFullYear()
        };
    }
}

// Application function that expects the standardized format
function displayUser(user) {
    console.log(`Name: ${user.fullName}, Age: ${user.age}`);
}

// Using the adapter to transform the data
const api = new ThirdPartyAPI();
const adapter = new UserAdapter(api);
const user = adapter.getUser();

displayUser(user);  // Output: Name: John Doe, Age: 34
