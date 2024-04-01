// Abstract Product: Button
interface Button {
  render(): void;
}

// Concrete Products: LightThemeButton
class LightThemeButton implements Button {
  render() {
    console.log("Rendering a button in Light Theme");
  }
}

// Concrete Products: DarkThemeButton
class DarkThemeButton implements Button {
  render() {
    console.log("Rendering a button in Dark Theme");
  }
}

// Abstract Product: Checkbox
interface Checkbox {
  render(): void;
}

// Concrete Products: LightThemeCheckbox
class LightThemeCheckbox implements Checkbox {
  render() {
    console.log("Rendering a checkbox in Light Theme");
  }
}

// Concrete Products: DarkThemeCheckbox
class DarkThemeCheckbox implements Checkbox {
  render() {
    console.log("Rendering a checkbox in Dark Theme");
  }
}

// Abstract Factory
interface ThemeFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

// Concrete Factory: Light Theme Factory
class LightThemeFactory implements ThemeFactory {
  createButton(): Button {
    return new LightThemeButton();
  }

  createCheckbox(): Checkbox {
    return new LightThemeCheckbox();
  }
}

// Concrete Factory: Dark Theme Factory
class DarkThemeFactory implements ThemeFactory {
  createButton(): Button {
    return new DarkThemeButton();
  }

  createCheckbox(): Checkbox {
    return new DarkThemeCheckbox();
  }
}

// Client
function renderUI(themeFactory: ThemeFactory) {
  const button = themeFactory.createButton();
  const checkbox = themeFactory.createCheckbox();

  button.render();
  checkbox.render();
}

// Usage
const lightThemeFactory = new LightThemeFactory();
renderUI(lightThemeFactory);

const darkThemeFactory = new DarkThemeFactory();
renderUI(darkThemeFactory);
