<?php

namespace App\Http\Controllers;

use Illuminate\Support\Collection;

class ServiceController extends Controller
{
    public function getTopServices()
    {
        // 1. Define an example list of services with their ratings.
        $services = [
            ['id' => 1, 'name' => 'House Keeping', 'rating' => 4.8],
            ['id' => 2, 'name' => 'Catering', 'rating' => 4.9],
            ['id' => 3, 'name' => 'Cleaning', 'rating' => 4.2],
            ['id' => 4, 'name' => 'Groundsman', 'rating' => 5.0],
            ['id' => 5, 'name' => 'Babysitting', 'rating' => 4.5],
        ];

        // 2. Use the Collection facade to sort and take the top 3.
        $top3Services = collect($services)
            ->sortByDesc('rating')
            ->take(3)
            ->values()
            ->all();

        // 3. Return the result.
        // When returning an array, Laravel automatically converts it to JSON.
        return response()->json([
            'message' => 'Top 3 Services Retrieved Successfully',
            'services' => $top3Services
        ]);
    }
}