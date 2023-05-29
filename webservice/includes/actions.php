<?php
/**
 * @return array
 */
function getCountry()
{
    return [
        [
            "id" => 1,
            "country" => "Tanzania",
            "city" => "Zanzibar",
            "img" => "http://localhost/PRG03-Magazine/webservice/includes/Thumbs/img5.jpg",

        ],
        [
            "id" => 2,
            "country" => "Jamaica",
            "city" => "Montego Bay",
            "img" => "http://localhost/PRG03-Magazine/webservice/includes/Thumbs/img1.jpg",

        ],
        [
            "id" => 3,
            "country" => "Japan",
            "city" => "Tokyo",
            "img" => "http://localhost/PRG03-Magazine/webservice/includes/Thumbs/img6.jpg",

        ],
        [
            "id" => 4,
            "country" => "China",
            "city" => "Shanghai",
            "img" => "http://localhost/PRG03-Magazine/webservice/includes/Thumbs/img3.jpg"

        ],
        [
            "id" => 5,
            "country" => "Indonesia",
            "city" => "Bali",
            "img" => "http://localhost/PRG03-Magazine/webservice/includes/Thumbs/img2.jpg"
        ],
        [
            "id" => 6,
            "country" => "Maledives",
            "city" => "Male",
            "img" => "http://localhost/PRG03-Magazine/webservice/includes/Thumbs/img4.jpg"
        ],
        [
            "id" => 7,
            "country" => "Portugal",
            "city" => "Portimao",
            "img" => "http://localhost/PRG03-Magazine/webservice/includes/Thumbs/img7.jpg"
        ],
        [
            "id" => 8,
            "country" => "Phillipines",
            "city" => "Cebu City",
            "img" => "http://localhost/PRG03-Magazine/webservice/includes/Thumbs/img8.jpg"
        ],
        [
            "id" => 9,
            "country" => "Mexico",
            "city" => "Punta Cana",
            "img" => "http://localhost/PRG03-Magazine/webservice/includes/Thumbs/img9.jpg"
        ],
        [
            "id" => 10,
            "country" => "Hawaii",
            "city" => "Wailua",
            "img" => "http://localhost/PRG03-Magazine/webservice/includes/Thumbs/img10.jpg"
        ],

    ];
}

/**
 * @param $id
 * @return mixed
 */
function showDetails($id)
{
    $tags = [
        1 => [
            "country" => "Tanzania",
            "city" => "Zanzibar",
        ],
        2 => [
            "country" => "Jamaica",
            "city" => "Montego Bay",
        ],
        3 => [
            "country" => "Japan",
            "city" => "Tokyo",
        ],
        4 => [
            "country" => "China",
            "city" => "Shanghai",
        ],
        5 => [
            "country" => "Indonesia",
            "city" => "Bali",
        ],
        6 => [
            "country" => "Maledives",
            "city" => "Male",
        ],
        7 => [
            "country" => "Portugal",
            "city" => "Portimao",
        ],
        8 => [
            "country" => "Phillipines",
            "city" => "Cebu City",
        ],
        9 => [
            "country" => "Mexico",
            "city" => "Punta Cana",
        ],
        10 => [
            "country" => "Hawaii",
            "city" => "Wailua",
        ],
    ];

    return $tags[$id];
}
