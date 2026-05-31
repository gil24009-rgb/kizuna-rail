import { bookingPage, processBookingRequest } from './book.js';
import confirmationPage from './confirm.js';
import listRoutesPage from './list.js';
import routeDetailsPage from './details.js';
import { Router } from 'express';

const router = Router();

// List all routes
router.get('/', listRoutesPage);

// Book ticket
router.get('/booking/:scheduleId', bookingPage);
router.post('/book', processBookingRequest);

// Booking confirmation page
router.get('/confirmation/:confirmationId', confirmationPage);

// Route details page
router.get('/:routeId', routeDetailsPage);

export default router;
