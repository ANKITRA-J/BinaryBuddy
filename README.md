# BinaryType - Binary Conversion Practice

A MonkeyType-inspired web application for practicing binary number conversions with a sleek dark theme.

## Features

- **Two Practice Modes**: Decimal → Binary and Binary → Decimal conversion
- **Real-time Statistics**: Track correct answers, wrong answers, and accuracy percentage
- **Dark Theme**: MonkeyType-inspired design with yellow accents
- **Input Validation**: Real-time validation for binary (0,1) and decimal (0-9) inputs
- **Visual Feedback**: Immediate feedback with color-coded correct/wrong indicators
- **Binary Reference Chart**: Quick reference for common decimal-binary conversions
- **Keyboard Navigation**: Press Enter to submit answers
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **UI**: Tailwind CSS + Radix UI + shadcn/ui
- **Backend**: Express.js + TypeScript
- **State Management**: React hooks with TanStack Query
- **Routing**: Wouter
- **Icons**: Lucide React


### Manual Build

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions
│   │   └── pages/          # Page components
├── server/                 # Backend Express server
├── shared/                 # Shared types and schemas
└── dist/                   # Built application (generated)
```

## License

MIT License
