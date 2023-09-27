# Donaton Campaign (Projcet) Featues
- **Homepage (Home Component):**
  - Displays a banner image and a search bar.
  - Allows users to search for specific donation categories.
  - Renders donation cards based on the search or displays all donation cards if no search is made.

- **Donation Cards (DonationCards Component):**
  - Displays a grid of donation cards.
  - Each card represents a donation item with an image, category, title, and a link to view details.
  - Filterable by category based on user's search.

- **Card Details (CardDetails Component):**
  - Displays detailed information about a specific donation item.
  - Shows an image, title, description, and a button to donate.

- **Navbar (Navbar Component):**
  - Provides navigation links to Home, Donation, and Statistics pages.
  - Toggle button for mobile view.
  - Logo for the website.

- **Statistics (Statistics Component):**
  - Displays a pie chart that represents the total donation and the user's donation.
  - Fetches data from a JSON file (presumably containing donation statistics).

- **After Donation Cards (AfterDonationCards Component):**
  - Displays cards representing donations after they have been made.
  - Initially shows a limited number of cards, with an option to see all.
  - Links to view details of the donations.

- **Error Page (ErrorPage Component):**
  - Shows a 404 error message and a button to go back to the homepage.

- **Local Storage Utilization (saveDonation and getDonation functions):**
  - Stores donation data locally in the user's browser using localStorage.
  - Enables saving and retrieving donation data.

- **Responsive Design:**
  - Ensures the website is accessible and usable across different devices (responsive design using Tailwind CSS classes).

- **Toast Notifications (React-Toastify):**
  - Provides toast notifications for successful donation actions.
