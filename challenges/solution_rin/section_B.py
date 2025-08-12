def top_three_services(services):
    # Sort by rating in descending order and return top 3
    sorted_services = sorted(services, key=lambda x: x["rating"], reverse=True)
    return sorted_services[:3]

if __name__ == "__main__":
    services = [
        { "name": "Tutoring", "rating": 4.6 },
        { "name": "Food Delivery", "rating": 4.9 },
        { "name": "Tech Support", "rating": 4.3 },
        { "name": "Child Care", "rating": 4.8 }
    ]

    result = top_three_services(services)
    print(result)