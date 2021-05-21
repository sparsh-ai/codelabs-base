summary: In this tutorial, we will learn how to setup our own tutorial repositories using codelab and git actions.
id: how-to-setup-your-own-codelab-site
categories: Gitaction, Web
tags: medium
status: Published
authors: Sparsh A.
Feedback Link: https://github.com/sparsh-ai/codelabs/issues

# How to setup your own codelab site (automated)

<!-- ------------------------ -->
## Prepare your Tutorial
Duration: 5

### Setup Jupyter

We chose jupyter notebooks as an ideal choice for preparing tutorials because it integrates markdown with code, images and million other things. If you do not have a jupyter environment setup locally, you can choose [Colab](https://colab.research.google.com/) or [Binder](https://mybinder.org/v2/gh/jupyterlab/jupyterlab-demo/master?urlpath=lab/tree/demo) to prepare your notebook on cloud for free.

### Create Tutorial
Write down your tutorial in colab as per [these](https://github.com/googlecodelabs/tools/blob/master/FORMAT-GUIDE.md) markdown instructions.

<!-- ------------------------ -->
## Setup your site
Duration: 5

<aside class="positive">
This step is a one-time setup process. We will use GitHub to maintain and host our codelab site for free.
</aside>

### Clone
Login to your git account and go to [this](https://github.com/sparsh-ai/codelabs-base) site and click ```Use this template``` button.

![clone](img/how-to-setup-your-own-codelab-site-clone.png)

### Name
Give your site a name and click on ```Include all branches```.

![name](img/how-to-setup-your-own-codelab-site-rename.png)

### Let it bake

Wait for 3-4 minutes till this yellow dot becomes green. Git Actions is preparing your site in the background. Go to ```Actions``` tab to see the process.

![bake](img/how-to-setup-your-own-codelab-site-bake.png)

<!-- ------------------------ -->
## Customize (optional)
Duration: 10

<aside class="positive">
    You can customize both landing page and codelabs. Codelab customization is mainly done via tags that we provide during the creation of jupyter notebook based tutorials.
</aside>

You can customize the following items in landing page by simple modifications.
1. Change Header and Logo
2. Add Category
3. Add View
4. Change Footer

#### Change Header and Logo
1. To change header and main page content, go to ```site > app > views > default``` and change ```index.html``` content as well as ```view.json``` contents accordingly.
2. To change logo, go to ```site > app > images``` and replace ```my-logo.svg``` with your logo.

Note: assuming the basic knowledge of html formattings. scope is mainly limited to find and replace things anyway.

#### Add Category
1. Go to ```site > app > styles > _categories.scss``` and add your category at the bottom in this format: ```@include codelab-card(['gitaction'], $color-weave-green, 'gitaction.svg');``` where ```gitaction``` is the category.
2. Go to ```site > app > images > icons``` and add svg icon with the same name as your category.
3. To use it, while creating codelab, add this category in the ```categories``` mata tag.


#### Add View
1. ```site > app > views``` and duplicate the ```medium``` folder.
2. rename the folder name to any name you want for your view.
3. Edit its json accordingly and add any image with the same name as your view.

Note: Refer to this ```medium``` folder for guidance, and delete it afterwards if required.

#### Change Footer
To change footer, go to ```site > app > views > default``` and change ```index.html``` content accordingly.

<!-- ------------------------ -->
## Add new Codelabs
Duration: 5

To add a new codelab to the codelab site, pull the repo, add the notebook and push it back to the master.

### Pull the repo
Pull the repo using ```git pull origin master``` where origin is pointed to your repo where codelabs site is hosted. If repo is already there, you can opt for ```git pull --rebase origin master``` instead.

### Add tutorial notebook
Add your tutorial notebook in the ```_notebook``` folder. Make sure the notebook format is following the codelab markdown guidelines and the extension is ```.ipynb```.

### Push the repo
Push the updated repo changes to master branch using the standard set of add -> commit -> push chain. e.g. you can use ```git add . && git commit -m 'new build' && git push origin master``` to push the changes.

<!-- ------------------------ -->
## Conclusion
Duration: 1

Git actions workflow named ```CI``` would automatically start deploying latest changes of the master branch. You can check the status in ```Actions``` tab of your git repo.

To access the codelabs site, go to your github pages URL. The typical URL format is ```https://<user_name>.github.io/<repo_name>```.

Verify the functionality and modify/enhance the process as per requirements.
