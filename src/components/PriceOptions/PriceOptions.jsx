import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Free Wi-Fi"
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price": 49.99,
            "features": [
                "24/7 Gym Access",
                "Group Fitness Classes",
                "Locker room and showers",
                "One free personal training session"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": 69.99,
            "features": [
                "All Standard Membership features",
                "Unlimited group classes",
                "5 personal training sessions per month",
                "Sauna and steam room access",
                "Nutrition consultation"
            ]
        },
        {
            "id": 4,
            "name": "Family Membership",
            "price": 99.99,
            "features": [
                "Access for up to 4 family members",
                "All Premium Membership features",
                "Childcare services",
                "Family group classes"
            ]
        },
        // {
        //     "id": 5,
        //     "name": "Student Membership",
        //     "price": 24.99,
        //     "features": [
        //         "Access during staffed hours",
        //         "Locker room access",
        //         "Discounted group classes",
        //         "Student ID required"
        //     ]
        // }
    ]
    return (
        <div className="w-8/12 mx-auto">
            <h2 className="text-6xl font-bold text-center p-4 m-8">
                Best Features With Best Prices In The Town</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 text-center gap-5">
                {/* dynamic */}
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;