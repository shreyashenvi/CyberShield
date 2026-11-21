export const MODULES = [
  { id: 'phishing', icon: '🎣', title: 'Phishing Attacks', sum: 'Fake emails and texts that steal logins.',
    how: 'Attackers imitate a trusted sender and push you to a look-alike page that captures your credentials.',
    signs: ['Urgent threats such as "account closes today"', 'Generic greeting and spelling mistakes', 'Sender or link domain does not match the real organisation'],
    ex: '"Dear student, your college mailbox is full. Verify at college-mail-verify.example now or lose access." The link is not your college domain.',
    todo: ['Do not click or reply', 'Open the official site by typing its address yourself', 'Report it to your college IT cell'],
    tips: ['Check the sender domain', 'Enable two-step verification', 'Hover over links before tapping'] },
  { id: 'upi', icon: '💸', title: 'UPI & Payment Fraud', sum: 'Tricks that make you send money while thinking you receive it.',
    how: 'Fraudsters send collect requests or QR codes claiming it is a refund or payment. Approving or entering your PIN sends money out of your account.',
    signs: ['Asked to enter UPI PIN to "receive" money', 'Stranger claims a wrong transfer and wants it back', 'Pressure to act fast'],
    ex: 'A "buyer" on a resale app sends a QR code: "Scan to get your Rs 4,000." Scanning and entering the PIN debits your account.',
    todo: ['Decline unknown collect requests', 'Never share PIN or OTP', 'Call 1930 immediately if money is lost'],
    tips: ['PIN is only for sending money', 'Verify the payee name before paying', 'Keep a low daily UPI limit'] },
  { id: 'internship', icon: '💼', title: 'Fake Internship & Placement Offers', sum: 'Offers that ask you to pay before you can work.',
    how: 'Scammers advertise attractive internships, then ask for registration, training or kit fees, or for your ID documents.',
    signs: ['Fee demanded for selection or registration', 'No interview, instant offer letter', 'Contact only via WhatsApp or free email domains'],
    ex: '"Congratulations! Selected for a Rs 25,000/month remote internship. Pay Rs 1,500 refundable fee within 2 hours."',
    todo: ['Do not pay', 'Verify on the company official careers page', 'Ask your placement cell'],
    tips: ['Genuine employers never charge candidates', 'Check the email domain', 'Search company name + "scam"'] },
  { id: 'impersonation', icon: '🎭', title: 'Impersonation & Identity Fraud', sum: 'Someone pretends to be staff, a friend or an official.',
    how: 'Attackers use a real name or photo of a professor, friend or officer from a new number and ask for urgent money or documents.',
    signs: ['New number using a known person photo', 'Urgent request for gift cards or transfers', 'Refuses to take a call'],
    ex: '"Hi, this is your Dean. I am in a meeting, buy 5 gift cards for me now and I will reimburse."',
    todo: ['Call the person on their known number', 'Do not send money or documents', 'Report the number'],
    tips: ['Limit personal info on social media', 'Verify via a second channel', 'Never share Aadhaar/PAN copies casually'] },
  { id: 'links', icon: '🔗', title: 'Suspicious Links & Malicious Websites', sum: 'Links that hide their real destination.',
    how: 'Short links, look-alike domains and odd URL patterns lead to fake login pages or malware downloads.',
    signs: ['Shortened URLs from unknown senders', 'HTTP, IP addresses or many hyphens in the domain', 'Words like verify, claim, prize, wallet'],
    ex: 'http://sbi-kyc-update.example/login?otp=1 pretends to be a bank but the domain is not the bank.',
    todo: ['Do not open it', 'Use the URL Checker for a preliminary look', 'Type the official address manually'],
    tips: ['Check the part right before the first single slash', 'Prefer bookmarks for banking', 'Keep your browser updated'] },
  { id: 'otp', icon: '🔑', title: 'OTP & Password Safety', sum: 'Protect the keys to your accounts.',
    how: 'OTPs and passwords prove it is you. Scammers use calls, forms and fake support to make you hand them over.',
    signs: ['Anyone asking for your OTP, PIN or CVV', 'Caller claims to be bank or support', 'Same password reused everywhere'],
    ex: '"This is your bank. Your card will be blocked, tell me the OTP just sent to verify."',
    todo: ['Hang up and call the number on your card', 'Change passwords if exposed', 'Turn on 2FA'],
    tips: ['Long unique passphrases', 'Use a password manager', 'OTPs are never shared with anyone'] },
];

export const QUIZ = [
  { c: 'Phishing', q: 'An email from "college-it@collegemail-support.example" says: verify your password within 24 hours. What should you do?', o: ['Click and log in quickly', 'Reply with your password', 'Ignore the link and confirm with IT through the official website or number', 'Forward it to all friends'], a: 2, e: 'Urgent password requests from look-alike domains are classic phishing. Verify through an official channel.' },
  { c: 'UPI Fraud', q: 'A stranger says they sent you Rs 5,000 by mistake and sends a collect request to "return" it. What do you do?', o: ['Approve the request', 'Enter your UPI PIN to receive', 'Decline it, since the PIN is only needed to send money', 'Share the OTP'], a: 2, e: 'You never need a PIN to receive money. A collect request takes money from you.' },
  { c: 'Fake Offers', q: 'You get an internship offer from a big MNC asking for a Rs 1,500 "refundable registration fee". Best response?', o: ['Pay, since it is refundable', 'Pay half', 'Do not pay; verify on the official careers page', 'Ask friends to pay too'], a: 2, e: 'Genuine employers do not charge candidates. Fees are the biggest red flag.' },
  { c: 'OTP', q: 'A caller claiming to be a bank executive asks for the OTP to stop your card being blocked. What now?', o: ['Share the OTP quickly', 'Hang up and call the number printed on your card', 'Share only half of it', 'Ask them to call later and share then'], a: 1, e: 'Banks never ask for OTPs. Call back on the official number.' },
  { c: 'Links', q: 'A WhatsApp group shares a shortened link promising free laptops for students. Best action?', o: ['Click to check', 'Do not click; short links hide the destination', 'Share it for others', 'Enter your Aadhaar to register'], a: 1, e: 'Shorteners hide where you will land and "free" offers are a common lure.' },
  { c: 'Impersonation', q: 'An unknown WhatsApp number with the Principal photo asks you to buy gift cards urgently. What do you do?', o: ['Buy them quickly', 'Reply asking for details', 'Verify by calling the college office or the real number', 'Send money in smaller amounts'], a: 2, e: 'Photos are easy to copy. Verify through a second, trusted channel.' },
  { c: 'Passwords', q: 'Which is the strongest account safety practice?', o: ['Same password everywhere', 'Unique long passwords with two-factor authentication', 'Using your birthdate', 'Sharing it with a roommate'], a: 1, e: 'Unique passphrases plus 2FA limit damage even if one site leaks.' },
  { c: 'Links', q: 'Which address is most likely the genuine SBI website?', o: ['sbi-secure-login.xyz', 'http://192.168.1.5/sbi', 'https://www.sbi.co.in', 'sbi.co.in.verify-now.top'], a: 2, e: 'Read the domain from the end: the real registered domain must be sbi.co.in.' },
  { c: 'Fake Offers', q: 'An offer letter arrives without any interview: Rs 80,000 per month for typing from home. What is it?', o: ['A great opportunity, share your Aadhaar', 'A red flag: no interview and unrealistic pay', 'Normal for startups', 'Pay a deposit to secure it'], a: 1, e: 'Unrealistic pay and no selection process are strong scam indicators.' },
  { c: 'Reporting', q: 'You lost money to a UPI scam. What should you do first?', o: ['Wait a week', 'Call 1930 and report at cybercrime.gov.in immediately', 'Delete the chats', 'Only post on social media'], a: 1, e: 'Quick reporting improves the chance of freezing the money. Preserve the evidence.' },
  { c: 'Phishing', q: 'Which combination suggests a phishing message?', o: ['Your correct name and no links', 'Generic greeting, urgent threat and an odd link', 'A newsletter you subscribed to', 'A message from a friend you called'], a: 1, e: 'Generic wording, urgency and unexpected links are classic phishing signs.' },
  { c: 'UPI Fraud', q: 'A buyer sends you a QR code and says "scan to receive payment". What is true?', o: ['Scanning is safe', 'Scanning a QR and entering your PIN can send money out', 'It is safe if you are quick', 'QR codes cannot be misused'], a: 1, e: 'Receiving money never needs a PIN or QR scan on your side.' },
];

const SHORT = ['bit.ly', 'tinyurl.com', 't.co', 'is.gd', 'cutt.ly', 'rb.gy', 'goo.gl', 'shorturl.at'];
const BRANDS = ['paytm', 'phonepe', 'sbi', 'hdfcbank', 'icicibank', 'google', 'amazon', 'flipkart', 'linkedin', 'whatsapp'];

export const MSG_RULES = [
  { t: 'Urgency or pressure', w: 15, re: /\b(urgent|immediately|last chance|act now|hurry|today only|expires? (today|soon)|within \d+ ?(hours?|hrs?|minutes?|mins?))\b/i, why: 'Scammers rush you so you do not stop to verify.' },
  { t: 'Asks for OTP, PIN or password', w: 30, re: /\b(otp|one[- ]time (password|code)|pin|password|cvv|passcode)\b/i, why: 'Genuine banks and colleges never ask you to share these.' },
  { t: 'Requests a fee or payment', w: 25, re: /\b(registration fee|processing fee|security deposit|refundable|collect request)\b|(pay|send|transfer)\W+(rs\.?|₹|inr)\s?\d+|(₹|rs\.?)\s?\d+.{0,30}(fee|deposit)/i, why: 'Real jobs and internships do not charge candidates to apply or join.' },
  { t: 'Unrealistic reward or promise', w: 20, re: /\b(you (have )?won|lottery|prize|cashback|guaranteed (job|placement)|no interview|work from home|earn .{0,15}(per|a) (day|week))\b/i, why: 'Too-good-to-be-true offers are used as bait.' },
  { t: 'Threat of account suspension or action', w: 20, re: /\b(suspend(ed)?|blocked|deactivated|kyc (update|expired)|legal action|arrest|account will be)\b/i, why: 'Fear is used to make you act without thinking.' },
  { t: 'Impersonation wording', w: 15, re: /\b(dear (student|customer|user)|hr department|principal|dean|registrar|bank officer|customer care|rbi)\b/i, why: 'Scammers pose as trusted staff or institutions.' },
  { t: 'Asks for sensitive information', w: 20, re: /\b(aadhaar|pan card|bank account|card number|share your|send your|upload your id|selfie)\b/i, why: 'Personal documents enable identity theft.' },
  { t: 'Contact only via WhatsApp/Telegram number', w: 10, re: /(whatsapp|telegram).{0,40}\d{10}|\d{10}.{0,40}(whatsapp|telegram)/i, why: 'Official organisations use official email and phone channels.' },
  { t: 'Multiple links', w: 10, fn: (t) => (t.match(/https?:\/\/|www\./gi) || []).length >= 2, why: 'Several links raise the chance that one is malicious.' },
  { t: 'Shortened link used', w: 15, fn: (t) => SHORT.some((s) => t.toLowerCase().includes(s + '/')), why: 'Short links hide the real destination.' },
];

const verdict = (score) => (score < 20 ? 'Low' : score < 45 ? 'Medium' : 'High');

export function analyzeMsg(text) {
  const hits = MSG_RULES.filter((r) => (r.fn ? r.fn(text) : r.re.test(text))).map((r) => ({ t: r.t, w: r.w, why: r.why }));
  const score = Math.min(100, hits.reduce((s, h) => s + h.w, 0));
  return { score, level: verdict(score), hits };
}

export function analyzeURL(raw) {
  const s = raw.trim();
  let u;
  try { u = new URL(/^[a-z]+:\/\//i.test(s) ? s : 'https://' + s); } catch { return null; }
  if (!u.hostname.includes('.') && !/^\d+$/.test(u.hostname)) return null;
  const h = u.hostname.toLowerCase(), parts = h.split('.'), hits = [];
  const add = (t, w, why) => hits.push({ t, w, why });
  if (/^http:\/\//i.test(s)) add('Uses HTTP instead of HTTPS', 15, 'Traffic is not encrypted and genuine login pages use HTTPS.');
  if (/^\d{1,3}(\.\d{1,3}){3}$/.test(h)) add('IP address used instead of a domain', 30, 'Legitimate services use proper domain names.');
  if (SHORT.includes(h)) add('URL shortening service', 20, 'The real destination is hidden.');
  if (s.includes('@')) add('Contains an @ symbol', 25, 'Text before @ can disguise the real destination.');
  if (s.length > 75) add('Very long URL', 10, 'Long URLs can bury the real domain or hide tracking tricks.');
  const kw = ['login', 'verify', 'update', 'secure', 'wallet', 'prize', 'claim', 'bonus', 'kyc', 'free'].filter((k) => (h + u.pathname).toLowerCase().includes(k));
  if (kw.length) add('Suspicious keywords: ' + kw.join(', '), Math.min(30, 8 + 6 * kw.length), 'These words are common in credential-stealing pages.');
  if (parts.length > 4) add('Unusually many subdomains', 15, 'Extra subdomains can mimic trusted brands.');
  if ((h.match(/-/g) || []).length >= 2) add('Multiple hyphens in domain', 10, 'Look-alike domains often chain words with hyphens.');
  if (h.includes('xn--')) add('Punycode (look-alike characters)', 20, 'Unicode tricks can imitate real brand names.');
  if (/\.(xyz|top|click|tk|ml|ga|cf|gq|icu)$/.test(h)) add('Uncommon top-level domain', 10, 'These endings are frequently abused in throwaway scam sites.');
  const b = BRANDS.find((x) => { const i = parts.indexOf(x); const ok = i >= 0 && (i === parts.length - 2 || (i === parts.length - 3 && ['co', 'com', 'gov', 'org'].includes(parts[parts.length - 2]))); return !ok && h.includes(x); });
  if (b) add('Possible misleading use of brand name "' + b + '"', 25, 'The registered domain is not the real brand domain.');
  if (/[?&](redirect|url|next|token|password|pass|otp|pin)=/i.test(u.search)) add('Sensitive or redirect parameters in URL', 15, 'Parameters like otp, token or redirect should not appear in links sent to you.');
  const score = Math.min(100, hits.reduce((x, i) => x + i.w, 0));
  return { score, level: verdict(score), hits };
}

export const SAMPLE_MSGS = [
  ['Fake internship', 'Congratulations! You are selected for a Rs 25,000/month work from home internship. Pay Rs 1,500 refundable registration fee within 2 hours. WhatsApp 9876543210 to confirm.'],
  ['Bank OTP scam', 'Dear customer, your account will be blocked today. Share the OTP sent to you immediately and your card number to complete KYC update.'],
  ['Prize link', 'You have won a prize! Claim now: http://claim-prize-now.example.xyz/win or bit.ly/free-gift'],
  ['Normal message', 'Hi, the DBMS lab is shifted to Room 204 tomorrow at 10 AM. Please bring your record book.'],
];
export const SAMPLE_URLS = [
  ['Bank look-alike', 'http://sbi-kyc-update.example.xyz/login?otp=1'],
  ['IP address', 'http://192.168.4.21/secure-login/verify'],
  ['Short link', 'https://bit.ly/internship-demo'],
  ['Normal site', 'https://www.wikipedia.org'],
];

export const RES = [
  { n: 'National Cyber Crime Reporting Portal', d: 'Official portal to report cyber fraud and online crimes.', u: 'https://cybercrime.gov.in' },
  { n: 'CERT-In', d: 'Indian Computer Emergency Response Team: advisories and incident reporting.', u: 'https://www.cert-in.org.in' },
  { n: 'RBI – Digital Payment Safety', d: 'Reserve Bank of India awareness material on safe digital payments and fraud.', u: 'https://www.rbi.org.in' },
  { n: 'Cybercrime Helpline 1930', d: 'Call immediately in case of financial fraud. Tap to dial on mobile.', u: 'tel:1930' },
];
export const STEPS = [
  { t: 'Received a suspicious message', i: '✉️', a: ['Do not reply, click or download anything', 'Take a screenshot, then block and report the sender', 'Verify using an official website or number'] },
  { t: 'Already clicked a link', i: '🖱️', a: ['Disconnect from the internet if a file was downloaded', 'Change passwords from a safe device and enable 2FA', 'Run a security scan and check recent logins'] },
  { t: 'Lost money to fraud', i: '💰', a: ['Call 1930 immediately', 'Report at cybercrime.gov.in', 'Inform your bank and request blocking of cards or UPI'] },
  { t: 'Evidence to preserve', i: '🗂️', a: ['Screenshots, chats, emails with full headers', 'Transaction IDs, UTR numbers, bank statements', 'Phone numbers, UPI IDs and URLs involved'] },
];
