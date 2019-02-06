# DATASET
The dataset was retrived utilizing google bigquery and dumped to a csv
file for further processing, this original file with no treatment is called jsanswers.csv, here we can find the following information :
1. The Id of the question (PostId)
2. The Content (in this case the code block)
3. the lenght of the code block
4. the line count of the code block
5. The score of the post
6. The title

A quick look at this files, one can notice that a postID can have multiple rows related to it, that's how multiple codeblocks are saved in the database.

## Filtered Dataset

### Extracting code from CSV
We used a python script called "ExtractCodeFromCSV.py" to extract the code from the original csv and merge all the codeblocks in their respective javascript file with the postID as name, this resulted in 336 thousand files.

### Running ESlint
Due to the single threaded nature of ESlint, we needed to create a script to run ESlint because it took a huge toll on the machine to run it on 336 thousand files, this script is named "ESlintRunnerScript.py", it splits the files in 20 evenly distributed parts and runs 20 processes of esLinter to generate the reports, as such it generates 20 json files.

### Number of Violations per Rule
This information was extracted using the script named "parser.py", it generated the file named "NumberofViolationsPerRule.csv" which contains the number of violations per rule used in the linter configuration in the dataset.

### Number of violations per Category
As a way to make relevant statistics of the dataset, we generated the number of violations per rule category as defined in the eslinter website, this information was extracted using the same "parser.py" script.

### Individual Reports
This information was extracted from the json reports, it's a csv file with PostID and violations per rule. 

### Rules 
The file Rules with categories contains all the rules used and their categories.
