##  Q1 It’s been 2 years since you built this API. The API overtime has become slow. Which columns would you index to improve the performance of the API ? Why ?
```
In order to improve the performance of the API, I would index the following columns :-
i) name and city in theatre table because these columns are frequently used for filtering
   theaters by name or city when a user selects a theater in a city.
ii) date or theatreid in movie table because users want to see movies available on a specific date.
iii) time in showtime table because users want to see available showtimes for a selected movie.
```

## Q2 You have noticed that even after indexing the columns the API speed isn’t under 100 ms. Update the code of existing API to cache the appropriate data in the redis. What all data would you cache and why ?
```
To improve API speed, implement caching with Redis for the following data:
 * Cache theater details, including names and cities because this data doesn't change frequently,
      so caching it can reduce the database load for theater-related queries.
  * Cache the list of movies available in a theater on a specific date.
```
