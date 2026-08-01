import React from 'react'
import Accordion from '../../components/Accordion'

const FAQ = () => {
  const faqItems = [
    {
      question: "Why does honey crystallise, and is crystallised honey safe to eat?",
      answer: (
        <div className="prose text-gray-700">
          <img src="/crystallized-honey-1.png" alt="Crystallized Honey" className="w-full h-auto mb-4 rounded-lg"/>
          <img src="/crystallized-honey-2.png" alt="Crystallized Honey" className="w-full h-auto mb-4 rounded-lg"/>
          <p className="mb-4">Honey crystallises because the natural sugars in it gradually form tiny crystals. This is a completely natural process and is actually a sign that the honey is minimally processed.</p>
          
          <h3 className="text-lg font-semibold mb-2">Why does honey crystallise?</h3>
          <p className="mb-2">Honey is mainly made up of two natural sugars:</p>
          <p className="mb-4">Glucose – tends to crystallise easily, Fructose – stays dissolved more readily</p>
          <p className="mb-2">Crystallisation happens when glucose separates from the water in the honey and forms crystals. Several factors affect how quickly this occurs:</p>
          <p className="mb-4">High glucose content: Honey varieties like sunflower, clover, and canola crystallise faster than acacia honey, which is higher in fructose, Cool temperatures: Honey crystallises most rapidly at around 50–59°F (10–15°C), Natural particles: Tiny bits of pollen, beeswax, or propolis act as "seeds" that help crystals form. This is why raw honey often crystallises sooner than highly filtered honey, Moisture content: Honey with lower water content may crystallise more readily</p>
          
          <h3 className="text-lg font-semibold mb-2">Is crystallised honey safe to eat?</h3>
          <p className="mb-2">Yes. Crystallised honey is 100% safe to eat as long as it hasn't fermented or been contaminated. Crystallization:</p>
          <p className="mb-4">Does not mean the honey has spoiled, Does not reduce its nutritional value, Does not indicate poor quality</p>
          <p className="mb-4">In fact, many people prefer crystallised honey because it has a smooth, spreadable texture that's excellent on bread, toast, and crackers.</p>
          
          <h3 className="text-lg font-semibold mb-2">How do you turn it back into liquid?</h3>
          <p className="mb-2">If you prefer liquid honey:</p>
          <p className="mb-4">1. Place the jar in a bowl of warm (not boiling) water. 2. Stir occasionally as the crystals dissolve. 3. Avoid overheating the honey (above 104–113°F / 40–45°C) to preserve its natural enzymes, aroma, and flavour.</p>
          <p className="mb-4">Avoid using very high heat or prolonged microwaving, as this can degrade some of honey's natural qualities.</p>
          
          <h3 className="text-lg font-semibold mb-2">Can crystallisation be prevented?</h3>
          <p className="mb-2">You can slow it down by:</p>
          <p className="mb-4">Storing honey at room temperature (around 68–77°F / 20–25°C), Keeping the lid tightly closed to prevent moisture absorption, Avoiding refrigeration, which speeds up crystallisation</p>
        </div>
      )
    },
    {
      question: "What does 'raw honey' mean?",
      answer: (
        <div className="prose text-gray-700">
          <p className="mb-4">For a premium honey brand like Anchored Hives, it's worth educating customers that crystallisation is a hallmark of genuine, raw honey—not a defect. Many premium honey producers include a note on the label explaining that natural crystallisation is expected and that warming the jar gently will return it to a liquid state.</p>
          
          <p className="mb-4">Raw honey is honey that has been removed from the hive and minimally processed. It is typically strained to remove large bits of wax, bee parts, or debris, but it is not pasteurised (heated to high temperatures) or heavily filtered.</p>
          
          <h3 className="text-lg font-semibold mb-2">Here's what makes raw honey different:</h3>
          <p className="mb-4">Minimal processing: It retains natural enzymes, pollen, antioxidants, and trace amounts of propolis that may be reduced during heavy processing, No high-heat treatment: Commercial honey is often heated to improve appearance and slow crystallisation. Raw honey is not exposed to those high temperatures, Natural appearance: It may look cloudy, contain tiny particles of pollen or wax, and often crystallises over time. Crystallisation is normal and does not mean the honey has spoiled, Flavour: Raw honey often has a richer, more complex taste that reflects the flowers the bees visited</p>
          
          <h3 className="text-lg font-semibold mb-2">Is raw honey healthier?</h3>
          <p className="mb-4">Raw honey generally contains more naturally occurring enzymes and antioxidants than highly processed honey. However, both raw and processed honey are primarily made up of natural sugars, so they should still be consumed in moderation.</p>
          
          <h3 className="text-lg font-semibold mb-2">Is raw honey safe?</h3>
          <p className="mb-2">For most healthy adults, yes. However:</p>
          <p className="mb-4">Do not give raw honey (or any honey) to infants under 12 months old, because it can contain spores of Clostridium botulinum, which can cause infant botulism. People with severe pollen allergies should use caution, as raw honey may contain small amounts of pollen.</p>
          
          <h3 className="text-lg font-semibold mb-2">How can you tell if honey is raw?</h3>
          <p className="mb-2">Look for labels such as:</p>
          <p className="mb-4">"Raw", "Unpasteurized", "Minimally processed"</p>
          <p className="mb-4">Keep in mind that labelling practices vary, so buying from a trusted local beekeeper or reputable producer is often the best way to ensure you're getting genuine raw honey.</p>
          
          <p className="mb-4">Since you've been working on Anchored Bee honey branding, labelling your product as "100% Raw Honey" is appropriate only if the honey is not pasteurised and has only been minimally strained after extraction.</p>
        </div>
      )
    },
    {
      question: "How should honey be stored and what is its shelf life?",
      answer: (
        <div className="prose text-gray-700">
          <p className="mb-4">Honey is one of the few natural foods that can last for an exceptionally long time when stored properly. Archaeologists have even found edible honey in ancient Egyptian tombs that was thousands of years old.</p>
          
          <h3 className="text-lg font-semibold mb-2">How to store honey</h3>
          <p className="mb-2">The best way to store honey is:</p>
          <p className="mb-4">Keep it tightly sealed to prevent it from absorbing moisture from the air, Store it at room temperature, ideally between 50–70°F (10–21°C), Keep it in a cool, dry place, such as a pantry or cupboard, Use a clean, dry spoon every time to avoid introducing moisture or contaminants, Store it in glass or food-grade plastic containers. Glass is often preferred because it doesn't absorb odours or stains</p>
          
          <h3 className="text-lg font-semibold mb-2">Avoid:</h3>
          <p className="mb-4">Leaving the lid open, Storing it near heat sources like stoves or in direct sunlight, Refrigerating honey, as this speeds up crystallisation</p>
          
          <h3 className="text-lg font-semibold mb-2">Shelf life</h3>
          <p className="mb-2">If stored correctly:</p>
          <p className="mb-4">Pure honey: Has an indefinite shelf life. It does not spoil under normal conditions because of its low moisture content, high sugar concentration, and naturally acidic pH. Raw honey: Also has an indefinite shelf life when kept sealed and dry. It may crystallise over time, but this is a natural process—not a sign of spoilage.</p>
          
          <h3 className="text-lg font-semibold mb-2">What if honey crystallises?</h3>
          <p className="mb-2">Crystallisation is completely normal, especially for raw honey. To return it to a liquid state:</p>
          <p className="mb-4">1. Place the jar in warm (not boiling) water. 2. Stir occasionally until the crystals dissolve. 3. Avoid overheating (especially above about 104–113°F (40–45°C)) if you want to preserve more of the natural enzymes and flavour.</p>
          
          <h3 className="text-lg font-semibold mb-2">When should honey be discarded?</h3>
          <p className="mb-2">Honey should only be discarded if it shows signs of contamination, such as:</p>
          <p className="mb-4">Fermentation (a sour smell, bubbles, or foaming), usually caused by excess moisture, Mould growth (rare in properly stored honey), Unusual odours or flavours resulting from contamination</p>
          
          <p className="mb-4">For a premium brand like Anchored Bee, you can confidently advise customers:</p>
          <p className="font-semibold mb-4">Storage Instructions: Store in a cool, dry place away from direct sunlight. Keep the lid tightly closed. Do not refrigerate. Crystallisation is a natural sign of pure honey and does not affect its quality. To liquefy, place the jar in warm water and stir gently.</p>
          
          <p>This guidance both educates customers and reinforces the authenticity of raw, natural honey.</p>
        </div>
      )
    },
    {
      question: "Can honey be used as a substitute for sugar in cooking and baking?",
      answer: (
        <div className="prose text-gray-700">
          <p className="mb-4">Yes. Honey is an excellent substitute for sugar in many recipes, including cakes, muffins, cookies, breads, sauces, marinades, beverages, and salad dressings. It adds natural sweetness, moisture, and a distinctive floral flavour.</p>
          
          <h3 className="text-lg font-semibold mb-2">General conversion</h3>
          <p className="mb-2">As a starting point:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>1 cup of granulated sugar ≈ ¾ cup of honey</li>
            <li>Because honey is sweeter than sugar, you usually need less of it.</li>
          </ul>
          
          <h3 className="text-lg font-semibold mb-2">Adjustments for baking</h3>
          <p className="mb-2">When replacing sugar with honey, make these changes:</p>
          <table className="w-full border-collapse border border-gray-300 mb-4">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Adjustment</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Recommendation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Reduce honey</td>
                <td className="border border-gray-300 px-4 py-2">Use about ¾ cup honey for every 1 cup sugar.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Reduce other liquids</td>
                <td className="border border-gray-300 px-4 py-2">Reduce the recipe's liquid by about ¼ cup for every 1 cup of honey used.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Lower oven temperature</td>
                <td className="border border-gray-300 px-4 py-2">Reduce the baking temperature by about 25°F (15°C) to prevent overbrowning.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Add a little baking soda</td>
                <td className="border border-gray-300 px-4 py-2">Add about ¼ teaspoon baking soda per cup of honey if the recipe doesn't already contain enough leavening. Honey is naturally acidic, and this can help balance the batter.</td>
              </tr>
            </tbody>
          </table>
          
          <h3 className="text-lg font-semibold mb-2">How honey affects recipes</h3>
          <p className="mb-2">Honey can:</p>
          <p className="mb-4">Produce a softer, moister texture, Keep baked goods fresh longer, Add a rich, floral flavour that varies depending on the honey's floral source, Promote deeper browning because of its natural sugars</p>
          
          <h3 className="text-lg font-semibold mb-2">Best uses</h3>
          <p className="mb-2">Honey works especially well in:</p>
          <p className="mb-4">Cakes and quick breads, Muffins, Cookies, Pancakes and waffles, Granola, Tea and coffee, Smoothies, Yogurt, Marinades and barbecue sauces, Salad dressings</p>
          
          <h3 className="text-lg font-semibold mb-2">When sugar may be better</h3>
          <p className="mb-2">Granulated sugar is often preferable when you want:</p>
          <p className="mb-4">Crisp cookies, Delicate sponge cakes, Recipes where a neutral sweetness is important, Candy-making that depends on precise sugar chemistry</p>
          
          <h3 className="text-lg font-semibold mb-2">Tips for raw honey</h3>
          <p className="mb-4">If you're using raw honey, add it after cooking whenever possible (such as in tea, oatmeal, or yoghurt) to preserve more of its natural enzymes and aroma. In baked goods, the heat will naturally reduce some of these components, but you'll still enjoy its unique flavour and moisture.</p>
          <p className="font-semibold">Cooking Tip: Replace 1 cup of sugar with ¾ cup of Anchored Bee Raw Honey. Reduce the recipe's liquid by ¼ cup and lower the oven temperature by 25°F (15°C) for deliciously moist, naturally sweet baked goods.</p>
        </div>
      )
    },
    {
      question: "How can consumers choose high-quality honey when shopping?",
      answer: (
        <div className="prose text-gray-700">
          <p className="mb-4">Choosing high-quality honey involves looking beyond attractive packaging. Here are the most important factors to consider.</p>
          
          <h3 className="text-lg font-semibold mb-2">1. Read the ingredient list</h3>
          <p className="mb-4">The label should ideally list only one ingredient: Honey. Avoid products with added sweeteners, flavours, or syrups unless they are clearly labelled as flavoured honey products.</p>
          
          
          <h3 className="text-lg font-semibold mb-2">3. Check the country or region of origin</h3>
          <p className="mb-4">A clear statement of where the honey was produced helps with traceability. Many consumers prefer locally produced honey because they know its source and can often learn more about the beekeeper.</p>
          
          <h3 className="text-lg font-semibold mb-2">4. Examine the appearance</h3>
          <p className="mb-2">Quality honey may be:</p>
          <p className="mb-4">Clear or cloudy, depending on how it was processed, Golden, amber, or dark brown—the colour depends on the flowers visited by the bees, not on quality</p>
          <p className="mb-4">Cloudiness or tiny particles of pollen and wax are common in raw honey.</p>
          
          <h3 className="text-lg font-semibold mb-2">5. Don't be concerned if it crystallises</h3>
          <p className="mb-4">Crystallisation is a natural process, especially for raw honey. It is usually a sign that the honey has not been excessively heated or filtered. It does not mean the honey has gone bad.</p>
          
          <h3 className="text-lg font-semibold mb-2">6. Buy from trusted producers</h3>
          <p className="mb-2">Purchase from:</p>
          <p className="mb-4">Reputable local beekeepers, Established honey brands, Retailers with good quality standards</p>
          <p className="mb-4">Producers who are transparent about their harvesting and processing practices are generally easier to trust.</p>
          
          <h3 className="text-lg font-semibold mb-2">7. Look for quality assurance</h3>
          <p className="mb-2">Some premium brands provide:</p>
          <p className="mb-4">Batch or lot numbers, Harvest dates, Laboratory testing, Food safety certifications</p>
          <p className="mb-4">These features improve traceability and consumer confidence.</p>
          
          <h3 className="text-lg font-semibold mb-2">8. Consider aroma and flavour</h3>
          <p className="mb-4">Natural honey should have a pleasant floral, fruity, herbal, or woody aroma depending on its botanical origin. The flavour should be characteristic of the flowers from which it was collected.</p>
          
          <h3 className="text-lg font-semibold mb-2">Red flags</h3>
          <p className="mb-2">Be cautious if:</p>
          <p className="mb-4">The ingredient list includes added syrups or sweeteners, The product provides little or no information about its origin, The price seems unrealistically low compared with similar products, The packaging makes extraordinary health claims without evidence</p>
          
          <h3 className="text-lg font-semibold mb-2">Tips for Anchored Bee</h3>
          <p className="mb-2">For a premium brand like Anchored Bee, you can help customers recognise quality by including:</p>
          <p className="mb-4">100% Pure Raw Honey, No Added Sugar or Syrups, Product of Kenya, Minimally Processed, Naturally Crystallizes, Batch number and best-before date for traceability, Storage instructions explaining that crystallisation is a natural sign of pure honey</p>
          <p>Educating customers about these features not only helps them make informed choices but also builds trust in the authenticity and quality of your honey brand.</p>
        </div>
      )
    },
    {
      question: "What questions should consumers ask producers at farmers' markets?",
      answer: (
        <div className="prose text-gray-700">
          <p className="mb-4">When buying honey at a farmers' market, asking thoughtful questions can tell you a lot about the producer's practices and the honey's quality. Honest, knowledgeable beekeepers are usually happy to answer.</p>
          
          <h3 className="text-lg font-semibold mb-2">Here are some of the best questions to ask:</h3>
          
          <h4 className="font-semibold mb-2">About the honey</h4>
          <p className="mb-4">Is this 100% pure honey, or is anything added? Is the honey raw or pasteurised? How is the honey filtered? (Light straining is common for raw honey.) When was this honey harvested?</p>
          
          <h4 className="font-semibold mb-2">About the bees and flowers</h4>
          <p className="mb-4">Where are your hives located? What flowers or plants were the bees primarily foraging on? Is this a single-floral (monofloral) or multi-floral (wildflower) honey?</p>
          
          <h4 className="font-semibold mb-2">About beekeeping practices</h4>
          <p className="mb-4">Do you harvest the honey yourself? How do you manage the health of your bee colonies? What steps do you take to avoid contaminating the honey during extraction and bottling?</p>
          
          <h4 className="font-semibold mb-2">About quality and safety</h4>
          <p className="mb-4">Has this honey been tested for moisture content or purity? Do you have any food safety certifications or laboratory test results? How should I store the honey? What should I expect if it crystallises?</p>
          
          <h4 className="font-semibold mb-2">About traceability</h4>
          <p className="mb-4">Is each jar from a specific harvest or batch? Can you tell me which apiary or region this honey came from?</p>
          
          <h3 className="text-lg font-semibold mb-2">Signs of a trustworthy producer</h3>
          <p className="mb-2">A reputable producer will usually:</p>
          <p className="mb-4">Explain their harvesting and processing methods clearly, Be transparent about where the honey comes from, Understand why honey crystallises and explain that it's natural, Avoid making exaggerated health claims (such as claiming honey cures diseases), Be willing to discuss quality testing or food safety practices</p>
          
          <h3 className="text-lg font-semibold mb-2">Questions that help separate marketing from quality</h3>
          <p className="mb-2">Instead of asking, "Is your honey real?" try asking:</p>
          <p className="mb-4">"What makes your honey different from supermarket honey?" "Why do you choose not to pasteurise (or why do you pasteurise) your honey?" "How do you ensure the honey remains pure from hive to jar?"</p>
          <p className="mb-4">These open-ended questions encourage detailed answers and give you a better sense of the producer's knowledge and transparency.</p>
          
          <p>For a brand like Anchored Bee, preparing clear answers to these questions—and even displaying them on a small sign or brochure at your market stall—can help build trust and confidence with potential customers.</p>
        </div>
      )
    },
    {
      question: "How is your honey sourced?",
      answer: "We work with local rural beekeepers from Farms in Kitui,Makueni and Baringo who follow sustainable and organic practices."
    },
    {
      question: "Do you add preservatives?",
      answer: "Our honey is raw and unprocessed with no additives or Preservatives."
    }
  ]

  return (
    <section className="py-16 relative">
      <div className="fixed inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url(/watermark-logo.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: '60%', mixBlendMode: 'multiply' }}></div>
      <div className="container mx-auto px-4 relative z-10 text-center max-w-6xl">
        <h1 className="text-3xl font-bold mb-6">FAQ</h1>
        <Accordion items={faqItems} />
      </div>
    </section>
  )
}

export default FAQ
