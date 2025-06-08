# Telegram Integration Setup

This guide explains how to set up Telegram notifications for your Cypress test results.

## Prerequisites

1. **Telegram Bot**: You need to create a Telegram bot
2. **Chat ID**: You need to get your chat ID where notifications will be sent
3. **GitHub Secrets**: You need to configure secrets in your repository

## Step 1: Create a Telegram Bot

1. Open Telegram and search for `@BotFather`
2. Start a chat with BotFather and send `/newbot`
3. Follow the instructions to create your bot:
   - Choose a name for your bot
   - Choose a username (must end with 'bot')
4. BotFather will give you a **Bot Token** - save this!

## Step 2: Get Your Chat ID

### Method 1: Using @userinfobot
1. Search for `@userinfobot` in Telegram
2. Start a chat and send any message
3. The bot will reply with your user information including your **Chat ID**

### Method 2: Using your bot
1. Start a chat with your newly created bot
2. Send any message to your bot
3. Open this URL in your browser (replace `YOUR_BOT_TOKEN`):
   ```
   https://api.telegram.org/botYOUR_BOT_TOKEN/getUpdates
   ```
4. Look for the `chat.id` field in the response

## Step 3: Configure GitHub Secrets

1. Go to your GitHub repository
2. Click on **Settings** tab
3. In the left sidebar, click **Secrets and variables** → **Actions**
4. Click **New repository secret** and add these two secrets:

### TELEGRAM_TOKEN
- **Name**: `TELEGRAM_TOKEN`
- **Value**: Your bot token from Step 1 (e.g., `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`)

### TELEGRAM_CHAT_ID
- **Name**: `TELEGRAM_CHAT_ID`
- **Value**: Your chat ID from Step 2 (e.g., `123456789`)

## Step 4: Test the Setup

1. Push any changes to your repository
2. The GitHub Action will run automatically
3. Check your Telegram chat for notifications

## Notification Format

You'll receive:
- **Text message** with test summary (passing/failing tests, duration, etc.)
- **HTML report** file (mochawesome.html)
- **JSON report** file (mochawesome.json)
- **Artifacts ZIP** file (screenshots and videos)

## Troubleshooting

### Bot not sending messages
- Verify your bot token is correct
- Make sure you've started a chat with your bot
- Check that your chat ID is correct

### GitHub Action failing
- Check the Actions tab in your repository for error details
- Verify both secrets are properly set
- Ensure secret names match exactly: `TELEGRAM_TOKEN` and `TELEGRAM_CHAT_ID`

### No files attached
- Files are only sent if they exist after test execution
- Screenshots are only created when tests fail
- Videos are created for all test runs (if enabled in Cypress config)

## Security Notes

- Never commit your bot token or chat ID to your repository
- Always use GitHub Secrets for sensitive information
- Your bot token gives full access to your bot - keep it secure
- Consider using a dedicated bot for CI/CD notifications