# Horizontal Scroll Animation Component

A smooth horizontal scroll animation that moves images horizontally as you scroll vertically down the page. Built with React, Framer Motion, and Tailwind CSS.

## 📚 **How It Works**

The horizontal scroll creates an effect where images move horizontally (left to right) as you scroll vertically down the page. It's like a "fake" horizontal scroll controlled by vertical scroll.

### **Core Concept**
- **Vertical scroll** triggers **horizontal movement**
- Images stay in view while moving left
- Creates immersive scrolling experience

## 🛠️ **Technical Breakdown**

### **1. Framer Motion Setup**
```tsx
const targetRef = useRef(null);
const { scrollYProgress } = useScroll({ 
  target: targetRef,
  offset: ["start end", "end start"]
});
const x = useTransform(scrollYProgress, [0, 1], ['0%', `${scrollDistance}px`]);
```

**What each part does:**
- `targetRef`: References the scroll container
- `scrollYProgress`: Tracks how much you've scrolled (0 to 1)
- `offset: ["start end", "end start"]`: When to start/stop tracking
- `useTransform`: Converts scroll progress to horizontal movement

### **2. CSS Structure**
```css
.carousel {
  height: 500vh; /* Creates scroll distance */
}

.content-container {
  height: 100vh;
  position: sticky; /* Stays in view */
  overflow: hidden; /* Hides horizontal overflow */
}

.images {
  display: flex;
  width: max-content; /* Allows horizontal overflow */
}
```

### **3. Scroll Distance Calculation**
```tsx
const scrollDistance = -((8 * 300) + (7 * 32) + 128);
// 8 images * 300px width + 7 gaps * 32px + padding
```
- **Negative value**: Moves left (positive would move right)
- **Calculate total width**: All images + gaps + padding
- **Adjust based on your content**

## 🎨 **Customization Guide**

### **A. Change Number of Images**
```tsx
// Update calculation
const scrollDistance = -((YOUR_IMAGE_COUNT * 300) + ((YOUR_IMAGE_COUNT-1) * 32) + 128);
```

### **B. Change Image Size**
```css
.image-item {
  width: 400px; /* Change this */
}

.image-item img {
  height: 500px; /* Change this */
}
```

### **C. Change Scroll Speed**
```css
.carousel {
  height: 300vh; /* Smaller = faster scroll */
  /* height: 700vh; /* Larger = slower scroll */
}
```

### **D. Change Gap Between Images**
```css
.images {
  gap: 1rem; /* Smaller gap */
  /* gap: 4rem; /* Larger gap */
}
```

### **E. Change Scroll Direction**
```tsx
// Move right instead of left
const x = useTransform(scrollYProgress, [0, 1], ['0%', `${Math.abs(scrollDistance)}px`]);
```

## 🚀 **Advanced Customizations**

### **A. Add More Images**
```tsx
const images = [
  { src: '/images/img1.jpg', description: 'Description 1' },
  { src: '/images/img2.jpg', description: 'Description 2' },
  // Add as many as you want
];
```

### **B. Different Image Sizes**
```css
.image-item:nth-child(1) { width: 200px; }
.image-item:nth-child(2) { width: 400px; }
.image-item:nth-child(3) { width: 300px; }
```

### **C. Add Vertical Movement**
```tsx
const y = useTransform(scrollYProgress, [0, 0.5, 1], [0, -50, 0]);
// Add to style: style={{ x, y }}
```

### **D. Change Scroll Triggers**
```tsx
const { scrollYProgress } = useScroll({ 
  target: targetRef,
  offset: ["start start", "end end"] // Different trigger points
});
```

## 🐛 **Common Issues & Solutions**

### **A. Images Not Moving**
- ✅ Check if `targetRef` is properly attached
- ✅ Verify scroll distance calculation
- ✅ Ensure CSS has `overflow: hidden`

### **B. Jumpy Animation**
- ✅ Increase `.carousel` height for smoother scroll
- ✅ Use `will-change: transform` in CSS
- ✅ Check for conflicting animations

### **C. Images Too Fast/Slow**
- ✅ Adjust `.carousel` height
- ✅ Modify scroll distance calculation
- ✅ Change `offset` values

## ⚡ **Performance Tips**

- Use `will-change: transform` for GPU acceleration
- Keep image sizes reasonable (under 500KB each)
- Avoid too many images (max 10-12 for smooth performance)
- Use `overflow: hidden` to prevent layout shifts
- Optimize images (WebP format recommended)

## 📁 **File Structure**

```
src/components/
├── horizontalscroll.tsx    # Main React component
├── horizontalscroll.css    # CSS styles
└── HorizontalScroll-README.md # This documentation
```

## 🔧 **Dependencies**

```json
{
  "framer-motion": "^10.x.x",
  "react": "^18.x.x",
  "tailwindcss": "^3.x.x"
}
```

## 📝 **Usage Example**

```tsx
import HorizontalScroll from './components/horizontalscroll';

function App() {
  return (
    <div>
      <h1>My Website</h1>
      <HorizontalScroll />
      <footer>Footer content</footer>
    </div>
  );
}
```

## 🎯 **Key Features**

- ✅ Smooth horizontal scroll animation
- ✅ Responsive design
- ✅ Customizable image sizes and gaps
- ✅ Adjustable scroll speed
- ✅ Performance optimized
- ✅ Easy to customize
- ✅ Works on all modern browsers

## 🚀 **Getting Started**

1. **Install dependencies**:
   ```bash
   npm install framer-motion
   ```

2. **Copy the component files** to your project

3. **Import and use**:
   ```tsx
   import HorizontalScroll from './components/horizontalscroll';
   ```

4. **Customize** the images, sizes, and animations as needed

## 📞 **Support**

If you encounter any issues or need help customizing the component:

1. Check the console for error messages
2. Verify image paths are correct
3. Ensure all dependencies are installed
4. Test with different scroll distances

---

**Happy Scrolling! 🎉**
