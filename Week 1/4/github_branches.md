Everytime you want to create a new feature - you create a new branch

1. Go to your terminal and cd into your project
2. Check that you are on the **main** branch with 
`git branch`
3. Create a new branch, for example feature_navbar
`git branch feature_navbar`
4. Work on the code, every 30min
`git add .`
`git commit -m "added new feature"`
5. When you are done
`git push namenewbranch` for example 
`git push feature_navbar`
6. Do a pull request on github from the **new branch** to the **main** branch, to merge the new content to the **main** branch
7. To retrieve the new content on your local computer, Go to your terminal and cd into your project
8. Checkout to the **main** branch with 
`git checkout main`
9. Pull the new content
`git pull origin main`

--> you are ready to create more branches