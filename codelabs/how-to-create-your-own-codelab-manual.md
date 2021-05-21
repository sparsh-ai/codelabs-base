summary: In this tutorial, we will learn how to manually create codelab site
id: how-to-create-your-own-codelab-manual
categories: Web
tags: medium
status: Published
authors: Sparsh A.
Feedback Link: https://form.jotform.com/211377288388469

# How to create your own codelab (manual)

<!-- ------------------------ -->
## Prerequisite
Duration: 5

### Open Colab

We will use colab notebook for building and deploying our codelabs and landing page. Go to [this](https://colab.research.google.com/) link and create a new notebook.

### Create Tutorial in colab
Write down your desired tutorial in colab as per [these](https://github.com/googlecodelabs/tools/blob/master/FORMAT-GUIDE.md) markdown instructions. You can copy/check [this](https://colab.research.google.com/gist/sparsh-ai/813507efeead92c86b8ca8b0d734e25e/codelabs-template.ipynb) example colab notebook for reference.

After creating the tutorial, save the colab by clicking on ```File -> Save``` or use keyboard shortcut ```ctrl+s```. This notebook will automatically be saved in your account's ```gdrive -> colab notebooks``` folder.

<!-- ------------------------ -->
## Create codelab
Duration: 10

### Open a new colab notebook

You can open a new colab notebook or copy this pre-built colab, containing the same code.

### Attach the google drive

To get the tutorial notebook from gdrive, we have to attach the drive to our colab runtime environment. 

Click on the third button (with google drive logo) and follow the process to connect.

### Update these parameters


```python
filename = 'codelabs-how-to-create-your-own-codelab-shared'
codelab_id = 'how-to-create-your-own-codelab'
target_base = "spar-data.github.io"
target_site = "my-codelabs"
git_username = "spar-data"
git_email = "spar-data@gmail.com"
```

### Install go and claat command-line toolkits


```python
!add-apt-repository ppa:longsleep/golang-backports -y
!apt update
!apt install golang-go
%env GOPATH=/root/go
!go get github.com/googlecodelabs/tools/claat
!cp ~/go/bin/claat /usr/bin/
```

### Convert into codelab format


```python
%cd /content
!cp /content/drive/MyDrive/Colab\ Notebooks/$filename'.ipynb' .
!jupyter nbconvert --to markdown $filename
!claat export $filename'.md'
```

### Verify the codelab format


```python
from google.colab.output import eval_js
print(eval_js("google.colab.kernel.proxyPort(9090)"))
!cd $codelab_id && claat serve
```

### Apply redirect patch


```python
%cd /content/$codelab_id
!mkdir -p scripts && \
cd scripts && \
rm codelab-elements.js && \
wget -q https://raw.githubusercontent.com/sparsh-ai/static/main/javascripts/codelab-elements.js
!grep -rl "<a href=\"'+hc(mc(a))+'\" id=\"arrow-back\">" ./ | xargs sed -i "s/<a href=\"'+hc(mc(a))+'\" id=\"arrow-back\">/<a href=\"'+hc(mc(a))+'\/\/\/\/"{target_base}"\/"{target_site}"\/\" id=\"arrow-back\">/g"
!grep -rl "https:\/\/storage.googleapis.com\/codelab-elements\/codelab-elements.js" ./ | xargs sed -i "s/https:\/\/storage.googleapis.com\/codelab-elements\/codelab-elements.js/scripts\/codelab-elements.js/g"
```

<!-- ------------------------ -->
## Create landing page
Duration: 10

### Fork the base repo

Fork [this](https://github.com/sparsh-ai/codelabs-manual) repo.

Rename the repo if you want. Update the parameter value ```target_site``` in this case.

### Setup git cli

There are different ways to setup git cli in colab. I will follow this process:
1. Generate personal access token
2. Store this token in ```creds.py``` python file in the following format:
```python
git_access_token = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```
3. Access this token using the following commands:


```python
import sys
sys.path.append("/content/drive/MyDrive")
import creds
git_access_token = creds.git_access_token
```

4. Basic configuration


```python
%cd /content
!mkdir $target_site
%cd $target_site
!git init
!git config --global user.email $git_username
!git config --global user.name $git_email
```

### Pull the repo


```python
!git remote add origin https://"{git_access_token}":x-oauth-basic@github.com/"{git_username}"/"{target_site}".git
!git pull origin master
```

### Add your codelab and push the changes to feature branch


```python
%cd /content/$target_site
!git checkout master
!git checkout -b $codelab_id
!cp -r /content/$codelab_id ./site/codelabs
!git add .
!git commit -m  'add codelab: '{codelab_id}
!git status
!git push -f origin $codelab_id
```

### Review and merge

Go to your github repo and review the changes. Verify the changes and create pull request to merge this feature branch into master. If you want to skip this step, you can directly push the changes to master branch.

<!-- ------------------------ -->
## Deploy the codelab
Duration: 10

### Pull the updated repo

We can rebase the repo that we pulled and updated in last few steps but to make these steps modular and independent of each other, so that we can skip steps if required, we will remove and repull the whole repo.


```python
%cd /content
!rm -r $target_site
!mkdir $target_site
%cd $target_site
!git init
!git remote add origin https://"{git_access_token}":x-oauth-basic@github.com/"{git_username}"/"{target_site}".git
!git pull origin master
```

### Build the site

This code installs node package manager and use gulp to build the static version of the whole codelab site.


```python
%cd site
!npm install
!npm install -g npm
!npm install -g gulp-cli
!gulp dist
```

We will copy the assets in a temporary folder and then paste in the branch of our repo.


```python
import shutil
shutil.copytree(f'/content/{target_site}/site/dist', '/content/temp/site')
!mv /content/temp/site/codelabs /content/temp
```

The following code is a patch to add our site name to the base paths so that git pages can correctly pull all the local reference files.


```python
!cd /content/temp/site && grep -rl '"\/[a-zA-Z0-9]' ./ | xargs sed -i 's/"\//"\/'{target_site}'\//g'
```

### Push the changes to ```artifacts``` branch


```python
%cd /content/$target_site
!git reset --hard
!git checkout --orphan artifacts
!git rm -rf .
!cp -r /content/temp/site/* .
!cp -r /content/temp/codelabs .
!rm -r ./site
!git add .
!git commit -m 'build feature: '{codelab_id}
!git push -f origin artifacts
```

### Attach github pages to artifacts branch

1. Go to your repo's settings
2. Go to 'pages' and select 'artifacts (root)' as your gh-pages
3. Go to your gh-pages url to access your codelabs

<!-- ------------------------ -->
## Customize
Duration: 5

### Customize Landing Page
1. Change Header and Logo
2. Add Category
3. Add View
4. Change Footer

<!-- ------------------------ -->
## Conclusion
Duration: 5

### Verify
Go to the github pages of your repo to access the codelab site. Verify the functionality and modify/enhance the process as per requirements.

### Iterate
Add more codelabs easily by using [this](https://colab.research.google.com/gist/sparsh-ai/813507efeead92c86b8ca8b0d734e25e/codelabs-template.ipynb#scrollTo=-67Oh2k3uCIW) colab that we share in the begninning.

### In future
- Automate some steps using *Github Actions*.
- Enhance the design of codelab landing page.
- Enhance the design of codelab tutorials.
- Change google analytics id.
