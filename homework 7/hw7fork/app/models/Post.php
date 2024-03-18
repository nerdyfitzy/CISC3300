<?php

namespace app\models;

class Post
{
    public function getAllPosts() {
        return [
            [
                'id' => '1',
                'user' => 'pinecone',
                'data' => 'this is post 1 from pinecone'
            ],
            [
                'id' => '2',
                'user' => 'kaylee',
                'data' => 'post 2 from kaylee fitzpatrick'
            ]
        ];
    }
}