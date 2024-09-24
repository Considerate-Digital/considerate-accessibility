# The Considerate Toolbar

The considerate toolbar is free and open to all. Once installed, it works on any website and any modern browser – just click on the icon to get started.
We are keen to start a discussion around AI in web accessibility, so if you have any feedback, please say hello – we’re still in Beta so would love to hear your thoughts.
Our considerate toolbar offers four simple toggle switches - Still, Calm, Focus and Scale - and each one of these modes can be used in conjunction with the others.

## Features

Our considerate toolbar offers four simple toggle switches – Still, Calm, Focus and Scale – and each one of these modes can be used in conjunction with the others.
The considerate toolbar is free and open to all. Once installed, it works on any website and any modern browser.

### Still, Calm, Focus and Scale: Why these modes?

Accessibility is rarely a priority for web design. In order to be more considerate of the varied needs of different users, we wanted to create a more tailored browsing experience.

#### Still

The Still setting is designed to offer a stable reading experience. It uses the [Open Dyslexic](https://opendyslexic.org/) font and increases the font size. Research suggests that the “unique shapes of each letter can help prevent confusion through flipping and swapping.” \[1\]

#### Calm

The Calm mode creates a neutral environment. Following guidance from the [National Autistic Society](https://dy55nndrxke1w.cloudfront.net/file/24/E0xBd-SE0PKVva5E0f_ZEHKO6YP/Autism%20Accessibility%20Guidelines%20Research%20Final%20Report%20-%20HI%20for%20National%20Autistic%20Society%20-%20tagged.pdf), it mutes all colours and images, and replaces background and font colours with a softer combination of shades.

#### Focus

The Focus setting bolds the start of each word to help anchor a user’s reading experience. Anecdotal evidence suggests that this format can help those with ADHD.

#### Scale

Scale is optimised for users who benefit from enlarged text. To improve readability, this setting mutes all colours and images, increases the font size and doubles the line height. Background and font colours are replaced with high-contrast but softer combinations of colours.

## Get Started

### Hosted Solution
Considerate Digital maintains a free hosted version of the toolbar.
[Get in touch](https://considerate.digital) if you need any support installing the Considerate Toolbar: Considerate Digital offers this as a service.

### Install
#### Code
Adding the Considerate Toolbar directly into your website's HTML requires some knowledge about code, so scroll down to find a simpler integration guide if you would prefer.
1. Copy the code below.
```
<script async src="https://considerate.digital/considerate-accessibility/considerate-accessibility.min.js"></script>
```
2. Add the code to your website's HTML files. If you are using any sort of templating or a framework, then you want to add this script in a place where it will load on every page. We would suggest placing the script at the top of the "body" tag but anywhere inside the "body" tag will work.
3. That's it. Please let us know how you get on. We are keen to improve the toolbar for everyone, so if you spot any improvements that could be made we would like to hear from you.

#### WordPress

1. Install the [WPCode](https://wordpress.org/plugins/insert-headers-and-footers/) plugin.
2. Activate the WPCode plugin.
3. The plugin name "Code Snippets" should appear in your WordPress admin menu.
4. Click on "Code Snippets" then click on the sub-menu "Header & Footer".
5. Copy and paste the code below into the text area under the title "Body".
```
<script async src="https://considerate.digital/considerate-accessibility/considerate-accessibility.min.js"></script>
```
6. Click "Save Changes" in the top right corner.
7. Open a new tab in your browser and load your website, the accessibility icon should appear.
8. That's it. Please let us know how you get on. We are keen to improve the toolbar for everyone, so if you spot any improvements that could be made we would like to hear from you.


#### Squarespace
Squarespace provides this [helpful guide](https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection) for adding code to a website. 

1. Open the [Code Injection panel](https://account.squarespace.com/project-picker?client_id=helpcenter&redirect_url=%2Fpages%2Fwebsite-tools%2Fcode-injection).
2. Copy and paste the code below into the "footer" area.
```
<script async src="https://considerate.digital/considerate-accessibility/considerate-accessibility.min.js"></script>
```
3. After adding the code, click "Save".
4. Open a new tab in your browser and load your website, the accessibility icon should appear.
5. That's it. Please let us know how you get on. We are keen to improve the toolbar for everyone, so if you spot any improvements that could be made we would like to hear from you.


#### Wix
Wix provides this [helpful guide](https://support.wix.com/en/article/embedding-custom-code-on-your-site) for adding code to your Wix website.

1. Go to [Settings](https://www.wix.com/my-account/site-selector/?buttonText=Open%20Settings&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https://www.wix.com/dashboard/{{metaSiteId}}/settings) in your site's dashboard.
2. Click the Custom Code tab in the Advanced section.
3. Click + Add Custom Code at the top right.
4. Copy and paste the code below in the text box. 
```
<script async src="https://considerate.digital/considerate-accessibility/considerate-accessibility.min.js"></script>
```
5. Enter a name for your code. We would recommend "Considerate Toolbar".
6. Select the "All pages" option under "Add Code to Pages". This allows the accessibility toolbar to show on every webpage.
7. Choose "Body - end" under "Place Code in:".
8. Click Apply.
9. That's it. Please let us know how you get on. We are keen to improve the toolbar for everyone, so if you spot any improvements that could be made we would like to hear from you.

## Why open source?
We chose the **GNU Affero General Public License v3 (AGPLv3)** because we believe that improving website accessibility is a utility that should be available to every website owner and operator. By opting for the AGPLv3, we have made sure that any future development and distribution of The Considerate Toolbar will be available to everyone. 

We have provided [an overview](/AGPLv3_INFO.md) of the AGPLv3 license to roughly outline how it works. For more detail please read [the full license](/LICENSE).

## Contributing
We welcome contributions from everyone, whether that's fixing some of the core code or a spelling mistake. If you're interested in making contributions to this project then please read our "Code of Conduct" before you make any suggestions or send a pull request.

To get started working on the codebase, follow our [development setup guide](/DEV_SETUP.md).

### Reporting bugs
Before submitting an issue, please take a few seconds to do a quick search to check that your issue has not already been raised or fixed. 
You can report bugs by submitting a new issue. The more detail you can provide in your issue, the better our team will be able to help you. Note that we expect anyone submitting a bug to adhere to our "Code of Conduct".

## License
The Considerate Toolbar is distributed under [AGPLv3](https://www.gnu.org/licenses/agpl-3.0.en.html). 
