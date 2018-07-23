Simple webapp to display N sorted tweets with one or more hashtags
https://warm-crag-73589.herokuapp.com/

User should be able to specify one or more hashtags, how many tweets to display, and a sort metric. Sort metric options currently include Favorite and Retweet counts. Updating the sort should not get a new list of tweets, but rather sort the tweets currently displayed. A new list of tweets should only be fetched when the hashtag input changes.

Example Input

User enters in #hashtag1 and then enters in #hashtag2, chooses to display 10 tweets, and sort by Favorites.

Example Output

A page that displays 10 (or however many the Twitter API can find and return that match the requirements) tweets with #hashtag1 and #hashtag2 sorted by Favorite count.
