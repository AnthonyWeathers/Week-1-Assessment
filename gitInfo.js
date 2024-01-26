/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
const gitDefinition = "Git is a system where software developers or coders, can utilize version control or track changes they made to their code."
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
const gitHubDefinition = "Github is a platform on the web that uses Git as a base, and provides a place for users to have access to Git, but also provides a place for developers to collaborate, to save a backup of their code, or versions of code if needed to perform rollback to older but functioning code."
//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
const gitInitDefinition = "This command is used to create a Git repository for the directory it is executed in, providing all of Git's features."
//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
const gitCloneDefinition = "Makes a full copy of the repo from the URL entered to the local machine that the command was executed on, allowing the user to start making their own additions or changes."
//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
const gitStatusDefinition = "This command provides all the details about the directory it is executed in, being current changes to files that have not been commited, changes in the staging area ready to be commited, and what files have not been made part of the repo for the directory."
//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
const gitAddDefinition = "The git add command is part of the process to save changes to the repo. When used, it adds the changes within the directory/file the command was performed in, to the staging area."

const gitAddCode = 'git add .'
//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
const gitCommitDefinition = "When executed, the git commit command saves all of the staged changes of the repository into a version to be stored within the version history. Must be given a -m and a message as shown in the gitCommitCode, to explain what the commit was for."

const gitCommitCode = "git commit -m initial commit"
//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
const gitPushDefinition = "This command sends the locally saved commits to the remote version of the repository on Github"