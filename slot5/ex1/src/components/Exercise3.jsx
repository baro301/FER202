function Exercise3() {
    // Destructuring object lồng nhau, city mặc định "Unknown City"
    const person = {
        name: "Baro",
        address: {
            street: "82 Non Nuoc Street",
            // city không có
        }
    };

    const { address: { street, city = "Da Nang City" } } = person;

    return (
        <div>
            <h2>Exercise 3</h2>
            <p>street: {street}</p>
            <p>city: {city}</p>
        </div>
    );
}
export default Exercise3;