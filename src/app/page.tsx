use client
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutSplitBottom from '@/components/navigation/NavbarLayoutSplitBottom/NavbarLayoutSplitBottom';
import FrameHero from '@/components/sections/layouts/hero/FrameHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <NavbarLayoutSplitBottom
        logoSrc="/images/logo.svg"
        logoWidth={40}
        logoHeight={40}
        buttonText="Buy PawCoin"
        onButtonClick={() => {}}
        navItems={[
          { name: 'Hero', id: 'hero' },
          { name: 'About', id: 'about' },
          { name: 'How to Buy', id: 'how-to-buy' },
          { name: 'Tokenomics', id: 'tokenomics' },
          { name: 'Footer', id: 'footer' },
        ]}
        className=""
        buttonClassName=""
        buttonBgClassName=""
        navItemClassName=""
      />
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <FrameHero
          title="Welcome to PawCoin"
          description="Join the friendliest community in the crypto space!"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SplitAbout
          description="PawCoin is a community-driven cryptocurrency focused on dog lovers and LWD (Love With Dogs)."
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D variant="simple" />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <BigNumberTokenomics
          title="Tokenomics"
          description="Understand how PawCoin functions within the ecosystem."
          kpiItems={[
            { value: "1M", description: "Total Supply", longDescription: "Maximum supply of PawCoins", icon: 'LucideCoin' },
            { value: "500K", description: "Market Cap", longDescription: "Current market valuation of PawCoin", icon: 'LucideChart' },
            { value: "2%, 5%, 10%", description: "Transaction Taxes", longDescription: "Tax rates on transactions", icon: 'LucideShield' },
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterBase
          logoSrc="/images/logo.svg"
          logoWidth={100}
          logoHeight={40}
          columns={[
            { title: 'Company', items: [{ label: 'About', onClick: () => {} }, { label: 'Careers', onClick: () => {} }] },
            { title: 'Resources', items: [{ label: 'Blog', onClick: () => {} }, { label: 'Help Center', onClick: () => {} }] },
            { title: 'Legal', items: [{ label: 'Privacy Policy', onClick: () => {} }, { label: 'Terms of Service', onClick: () => {} }] },
          ]}
          copyrightText="© PawCoin 2023"
          onPrivacyClick={() => {}}
          className=""
          containerClassName=""
          logoClassName=""
          columnsClassName=""
        />
      </div>
    </SiteThemeProvider>
  );
}