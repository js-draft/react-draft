# React Draft
📝 WIP: Develop your React components in isolation without any configuration.

**Note:** This tool is not built for server-side rendering.

## Installation

In your project's root directory, run:

```bash
npm i @digital-taco/react-draft
```

In your project's `package.json`, add:

```json
"scripts": {
  "draft": "npm run draft"
}
```

## Usage

Run the following command in the root of your project:

```bash
npm run draft
```

## Local Development

For ease of development, a create-react-app powered repository has been created. Developing `react-draft` is made much simpler by npm linking the repositories. Clone it locally, then follow these steps:

Where you cloned `react-draft`, run:

```bash
npm link
```

Where you cloned `META-react-draft-sandbox`, run:

```bash
npm link @digital-taco/react-draft
```

Run draft in the sandbox. Any changes made in `react-draft` will be picked up.

## Authors

Zach Williams (@zachintosh)

Kyle West (@kyle-west)
