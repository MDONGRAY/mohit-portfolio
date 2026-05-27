# ⚠️ IMPORTANT: Image File Placement

## What You Need to Do

Your **DeepGen AI screenshot** needs to be placed at the correct location for the Projects section to display it properly.

---

## Image Location

**File path:** `src/assets/deepgen-ui.png`

**Full absolute path:** `d:\mohit-portfolio-main\src\assets\deepgen-ui.png`

---

## How to Place the Image

### Option 1: Using Windows File Explorer
1. Navigate to `d:\mohit-portfolio-main\src\assets\`
2. Copy your DeepGen screenshot image
3. Rename it to `deepgen-ui.png`
4. Paste it in the `assets` folder

### Option 2: Using Command Prompt
```bash
copy "C:\path\to\your\deepgen-screenshot.png" "d:\mohit-portfolio-main\src\assets\deepgen-ui.png"
```

### Option 3: Using PowerShell
```powershell
Copy-Item -Path "C:\path\to\your\deepgen-screenshot.png" -Destination "d:\mohit-portfolio-main\src\assets\deepgen-ui.png"
```

---

## After Placing the Image

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Check if it works:**
   - Navigate to the Projects section
   - You should see the DeepGen AI card with your screenshot as background
   - Text should be readable with the dark overlay

3. **If it doesn't show:**
   - Check that the filename is exactly `deepgen-ui.png`
   - Check that it's in the `src/assets/` folder
   - Restart the dev server with `Ctrl+C` and `npm run dev` again
   - Clear browser cache (Ctrl+Shift+Delete)

---

## What Happens When Image Is Placed

The Projects component will:
1. ✅ Display the DeepGen AI card at full width (above other projects)
2. ✅ Use the screenshot as background image
3. ✅ Apply a dark overlay (`bg-black/70`) so text is readable
4. ✅ Show title, subtitle, description, tech stack
5. ✅ Display GitHub and Live Demo buttons
6. ✅ Add hover effects that lighten the overlay

---

## Current Status

- ✅ All code is implemented
- ✅ Image import is in place: `import deepgenBg from '../assets/deepgen-ui.png';`
- ✅ Component is ready to use the image
- ⏳ **WAITING:** Image file needs to be placed at `src/assets/deepgen-ui.png`

---

## Troubleshooting

### Issue: Image doesn't show
**Solution:**
1. Check filename is exactly `deepgen-ui.png` (case-sensitive)
2. Verify it's in `src/assets/` folder
3. Restart dev server: `Ctrl+C` then `npm run dev`
4. Clear browser cache or use Incognito/Private mode

### Issue: Image shows but text is hard to read
**Solution:**
- The dark overlay is working as intended
- This creates high contrast for readability
- You can adjust overlay opacity in `Projects.jsx` line 22: `bg-black/70`
- Use `bg-black/60` for lighter overlay or `bg-black/80` for darker

### Issue: Image is stretched or distorted
**Solution:**
- The CSS uses `backgroundSize: 'cover'` which maintains aspect ratio
- This is the correct behavior
- Image will be cropped if card aspect ratio differs from image

---

## File Location Verification

### Current assets folder contains:
- ✅ hero.png
- ✅ react.svg
- ✅ vite.svg
- ⏳ **deepgen-ui.png** (To be added)

---

## Next Steps

1. Place `deepgen-ui.png` in `src/assets/`
2. Run `npm run dev`
3. Visit `http://localhost:5173`
4. Scroll to Projects section
5. Verify DeepGen AI card displays correctly

That's it! The rest of the implementation is complete and ready to go.

