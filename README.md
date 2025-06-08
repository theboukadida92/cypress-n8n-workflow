# Cypress n8n Workflow Testing

Automated testing framework for n8n workflows using Cypress with GitHub Actions integration and Telegram notifications.

## Features

- 🧪 **Cypress Testing**: End-to-end testing framework
- 📊 **Mochawesome Reports**: Beautiful HTML test reports
- 🤖 **GitHub Actions**: Automated CI/CD pipeline
- 📱 **Telegram Notifications**: Real-time test results
- 🎲 **Faker.js Integration**: Generate realistic test data
- 📁 **Organized Structure**: Clean project organization

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Tests
```bash
# Run tests in headless mode
npm test

# Open Cypress GUI
npx cypress open
```

### 3. Set up Telegram Notifications (Optional)
See [TELEGRAM_SETUP.md](./TELEGRAM_SETUP.md) for detailed instructions.

## Project Structure

```
cypress-n8n-workflow/
├── .github/
│   └── workflows/
│       └── ci.yml              # GitHub Actions workflow
├── cypress/
│   ├── e2e/
│   │   └── sample.cy.js        # Example test file
│   ├── fixtures/
│   │   └── example.json        # Test data
│   └── support/
│       ├── commands.js         # Custom commands
│       └── e2e.js             # Support file
├── cypress.config.js           # Cypress configuration
├── package.json               # Dependencies and scripts
├── TELEGRAM_SETUP.md          # Telegram integration guide
└── README.md                  # This file
```

## GitHub Actions Workflow

The CI/CD pipeline automatically:
1. **Triggers** on every push to the repository
2. **Installs** dependencies and runs Cypress tests
3. **Generates** Mochawesome HTML and JSON reports
4. **Collects** screenshots and videos from test runs
5. **Sends** results via Telegram with attachments

### Workflow Features
- ✅ Runs on Ubuntu latest
- ✅ Uses Node.js 18
- ✅ Continues on test failures to generate reports
- ✅ Zips artifacts (screenshots/videos)
- ✅ Sends detailed Telegram notifications

## Available Scripts

- `npm test` - Run Cypress tests in headless mode
- `npx cypress open` - Open Cypress Test Runner GUI
- `npx cypress run` - Run tests in headless mode

## Dependencies

### Main Dependencies
- **Cypress**: Testing framework
- **@faker-js/faker**: Generate fake data for tests

### Reporting Dependencies
- **mochawesome**: Test reporter
- **mochawesome-merge**: Merge multiple test reports
- **mochawesome-report-generator**: Generate HTML reports

## Configuration

### Cypress Configuration (`cypress.config.js`)
- **Reporter**: Mochawesome for beautiful reports
- **Base URL**: Configure your application URL
- **Spec Pattern**: `cypress/e2e/**/*.cy.{js,jsx,ts,tsx}`

### GitHub Actions Configuration (`.github/workflows/ci.yml`)
- **Trigger**: Runs on push to any branch
- **Node Version**: 18
- **Test Reports**: Generated in `cypress/results/`
- **Artifacts**: Screenshots and videos zipped

## Writing Tests

### Basic Test Structure
```javascript
describe('n8n Workflow Tests', () => {
  it('should test workflow execution', () => {
    cy.visit('https://your-n8n-instance.com');
    // Your test code here
  });
});
```

### Using Faker for Test Data
```javascript
import { faker } from '@faker-js/faker';

const testData = {
  email: faker.internet.email(),
  name: faker.person.fullName(),
  company: faker.company.name()
};
```

## Telegram Integration

Receive automated notifications with:
- 📊 Test summary (passing/failing counts)
- ⏱️ Execution duration
- 📄 HTML report attachment
- 📋 JSON report attachment
- 📦 Screenshots and videos ZIP

See [TELEGRAM_SETUP.md](./TELEGRAM_SETUP.md) for setup instructions.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add your tests in `cypress/e2e/`
4. Commit your changes
5. Push and create a Pull Request

## License

ISC License - see package.json for details.