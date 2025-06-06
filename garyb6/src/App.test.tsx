import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App Component', () => {
  beforeEach(() => {
    render(<App />);
  });

  describe('Navigation', () => {
    it('should display all navigation links', () => {
      const homeLink = screen.getByText('Home');
      expect(homeLink).toBeInTheDocument();
      expect(homeLink).toBeVisible();
      expect(homeLink).toHaveAttribute('href', '#home');
      
      const aboutLink = screen.getByText('About');
      expect(aboutLink).toBeInTheDocument();
      expect(aboutLink).toBeVisible();
      expect(aboutLink).toHaveAttribute('href', '#about');
      
      const skillsLink = screen.getByText('Skills');
      expect(skillsLink).toBeInTheDocument();
      expect(skillsLink).toBeVisible();
      expect(skillsLink).toHaveAttribute('href', '#skills');
      
      const projectsLink = screen.getByText('Projects');
      expect(projectsLink).toBeInTheDocument();
      expect(projectsLink).toBeVisible();
      expect(projectsLink).toHaveAttribute('href', '#projects');
      
      const contactLink = screen.getByText('Contact');
      expect(contactLink).toBeInTheDocument();
      expect(contactLink).toBeVisible();
      expect(contactLink).toHaveAttribute('href', '#contact');
    });

    it('should highlight active section in navigation', () => {
      const navLinks = screen.getAllByRole('link');
      
      // Simulate scrolling to different sections
      fireEvent.scroll(window, { target: { scrollY: 1000 } });
      const aboutLink = screen.getByText('About');
      expect(aboutLink).toHaveClass('active');

      fireEvent.scroll(window, { target: { scrollY: 2000 } });
      const projectsLink = screen.getByText('Projects');
      expect(projectsLink).toHaveClass('active');
    });

    it('should handle mobile menu toggle', () => {
      const menuButton = screen.getByRole('button', { name: /menu/i });
      
      // Initial state
      expect(screen.getByRole('navigation')).not.toHaveClass('active');
      
      // Toggle menu
      fireEvent.click(menuButton);
      expect(screen.getByRole('navigation')).toHaveClass('active');
      
      // Toggle menu again
      fireEvent.click(menuButton);
      expect(screen.getByRole('navigation')).not.toHaveClass('active');
    });
  });

  describe('Hero Section', () => {
    it('should display hero content correctly', () => {
      const name = screen.getByText('Gary Bennett');
      expect(name).toBeInTheDocument();
      expect(name).toBeVisible();
      expect(name).toHaveClass('hero-content');

      const title = screen.getByText('Software Engineer');
      expect(title).toBeInTheDocument();
      expect(title).toBeVisible();
      expect(title).toHaveStyle({ color: 'var(--primary-color)' });

      const description = screen.getByText('Building innovative solutions with modern technologies');
      expect(description).toBeInTheDocument();
      expect(description).toBeVisible();

      const ctaButton = screen.getByText('Get in Touch');
      expect(ctaButton).toBeInTheDocument();
      expect(ctaButton).toBeVisible();
      expect(ctaButton).toHaveClass('cta-button');
    });

    it('should handle CTA button click', () => {
      const ctaButton = screen.getByText('View My Work');
      
      // Mock scrollIntoView
      const mockScrollIntoView = jest.fn();
      window.HTMLElement.prototype.scrollIntoView = mockScrollIntoView;
      
      fireEvent.click(ctaButton);
      expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    });
  });

  describe('About Section', () => {
    it('should display about content', () => {
      const heading = screen.getByText('About Me');
      expect(heading).toBeInTheDocument();
      expect(heading).toBeVisible();

      const content = screen.getByText(/I'm a passionate software engineer/);
      expect(content).toBeInTheDocument();
      expect(content).toBeVisible();
      expect(content).toHaveStyle({ color: 'var(--light-text)' });
    });

    it('should display social media links', () => {
      const socialLinks = screen.getAllByRole('link', { name: /github|linkedin|twitter/i });
      
      expect(socialLinks).toHaveLength(3);
      socialLinks.forEach(link => {
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      });
    });
  });

  describe('Skills Section', () => {
    it('should display all skill categories', () => {
      const heading = screen.getByText('Skills');
      expect(heading).toBeInTheDocument();
      expect(heading).toBeVisible();

      ['Frontend', 'Backend', 'Tools & Others'].forEach(category => {
        const element = screen.getByText(category);
        expect(element).toBeInTheDocument();
        expect(element).toBeVisible();
        expect(element).toHaveStyle({ color: 'var(--primary-color)' });
      });
    });

    it('should display key skills', () => {
      const keySkills = ['React', 'TypeScript', 'Node.js', 'Python', 'Git', 'Docker'];
      keySkills.forEach(skill => {
        const element = screen.getByText(skill);
        expect(element).toBeInTheDocument();
        expect(element).toBeVisible();
        expect(element).toHaveStyle({ color: 'var(--light-text)' });
      });
    });

    it('should display skill categories', () => {
      const categories = ['Frontend', 'Backend', 'Tools & Others'];
      
      categories.forEach(category => {
        const categoryElement = screen.getByText(category);
        expect(categoryElement).toBeInTheDocument();
        expect(categoryElement).toHaveClass('category-title');
      });
    });

    it('should display skill items with icons', () => {
      const skillItems = screen.getAllByRole('listitem');
      
      skillItems.forEach(item => {
        expect(item).toHaveClass('skill-item');
        expect(item.querySelector('i')).toBeInTheDocument();
      });
    });
  });

  describe('Projects Section', () => {
    it('should display project cards', () => {
      const heading = screen.getByText('Projects');
      expect(heading).toBeInTheDocument();
      expect(heading).toBeVisible();

      ['Project One', 'Project Two'].forEach(project => {
        const element = screen.getByText(project);
        expect(element).toBeInTheDocument();
        expect(element).toBeVisible();
        expect(element).toHaveStyle({ color: 'var(--primary-color)' });
      });
    });

    it('should have project links', () => {
      const projectLinks = screen.getAllByText(/View Demo|Source Code/);
      expect(projectLinks).toHaveLength(4);
      projectLinks.forEach(link => {
        expect(link).toBeVisible();
        expect(link).toHaveStyle({ color: 'var(--primary-color)' });
      });
    });

    it('should filter projects by category', () => {
      const filterButtons = screen.getAllByRole('button', { name: /all|frontend|backend|fullstack/i });
      
      // Click on Frontend filter
      fireEvent.click(filterButtons[1]);
      const frontendProjects = screen.getAllByTestId('project-card');
      frontendProjects.forEach(project => {
        expect(project).toHaveAttribute('data-category', 'frontend');
      });
    });

    it('should handle project card hover effects', () => {
      const projectCard = screen.getAllByTestId('project-card')[0];
      
      // Initial state
      expect(projectCard).not.toHaveClass('hover');
      
      // Hover effect
      fireEvent.mouseEnter(projectCard);
      expect(projectCard).toHaveClass('hover');
      
      // Remove hover effect
      fireEvent.mouseLeave(projectCard);
      expect(projectCard).not.toHaveClass('hover');
    });
  });

  describe('Contact Section', () => {
    it('should display contact form', () => {
      const heading = screen.getByText('Get in Touch');
      expect(heading).toBeInTheDocument();
      expect(heading).toBeVisible();

      const contactInfo = screen.getByText('Contact Information');
      expect(contactInfo).toBeInTheDocument();
      expect(contactInfo).toBeVisible();

      ['Name', 'Email', 'Message'].forEach(field => {
        const input = screen.getByPlaceholderText(field);
        expect(input).toBeInTheDocument();
        expect(input).toBeVisible();
        expect(input).toBeRequired();
      });

      const submitButton = screen.getByText('Send Message');
      expect(submitButton).toBeInTheDocument();
      expect(submitButton).toBeVisible();
      expect(submitButton).toHaveClass('submit-button');
    });
  });

  describe('Footer', () => {
    it('should display copyright information', () => {
      const footer = screen.getByText(/© 2024 Gary Bennett/);
      expect(footer).toBeInTheDocument();
      expect(footer).toBeVisible();
      expect(footer).toHaveStyle({ color: 'white' });
    });
  });
}); 