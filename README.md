# Pocket Chef

<a href="https://ibb.co/k8ZLZh6"><img src="https://i.ibb.co/Ykg5gtT/Screen-Shot-2022-04-12-at-10-10-22-AM.png" alt="Screen-Shot-2022-04-12-at-10-10-22-AM" border="0"></a>
- This is a website where users can search recipes by their favorite ingredients or cuisine 
- The bottom of the landing page contains carousel of popular recipes and vegetarian/vegan recipes
- The data is obtained from Spoonacular Recipe API

## Things I learned
- Implementing and customizing react-responsive carousel to display images in a stylish fashion
- Implementing multiple pages with React Router. Just using anchor tag and href in React refreshes the whole page, and I wanted to find a way to only refresh the updated components
- Using Styled to style my components outside css

## Challenges I encountered
- Coming up with recipe card design
- Spoonacular Recipe API has a daily quota of 150 calls. Testing the website multiple times made me reach quota quickly, and broke the website with 404 error. I got around this problem by storing called data in cache and calling it every time during the development stage

## Upcoming changes
- Add a system where users can click a heart on each recipe card to save it as a favorite recipe. The 'favorite' status can be toggled by clicking the heart. User gets an access to a carousel of favorite recipes below the search bar
- Add options to search for healthy recipes, such those below 500 calories or those with are low sugar content
