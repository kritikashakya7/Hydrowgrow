const router = express.Router();

router.post("/create", createOrder);
router.get("/payment/callback", paymentCallback);

export default router;
