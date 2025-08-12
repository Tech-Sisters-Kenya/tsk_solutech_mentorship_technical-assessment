# Section B: Problem Solving Task

services = [
    { "name": "Tutoring", "rating": 4.6 },
    { "name": "Food Delivery", "rating": 4.9 },
    { "name": "Tech Support", "rating": 4.3 },
    { "name": "Child Care", "rating": 4.8 }
]

def top_three_services(service_list):
    """Return top 3 services sorted by rating (desc)."""
    return sorted(service_list, key=lambda s: s['rating'], reverse=True)[:3]

if __name__ == "__main__":
    print(top_three_services(services))
