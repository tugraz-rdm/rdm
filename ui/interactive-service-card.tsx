'use client';

import { FC, useState } from 'react';
import {
  faBookmark,
  faExternalLinkAlt,
  faInfoCircle,
  faPlay,
  faShare,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { ServiceItem } from '#/lib/services';

interface InteractiveServiceCardProps {
  item: ServiceItem;
  phase: string;
  onBookmark?: (item: ServiceItem) => void;
  onShare?: (item: ServiceItem) => void;
  isBookmarked?: boolean;
}

const InteractiveServiceCard: FC<InteractiveServiceCardProps> = ({
  item,
  phase,
  onBookmark,
  onShare,
  isBookmarked = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  const handleBookmark = () => {
    onBookmark?.(item);
  };

  const handleShare = () => {
    onShare?.(item);

    // Determine what to share
    const shareUrl = item.externalLink || window.location.origin + '/';
    const shareText = `${item.name} - ${
      item.description || 'RDM Service at TU Graz'
    }`;

    if (navigator.share) {
      // Use native share API
      navigator
        .share({
          title: item.name,
          text: shareText,
          url: shareUrl,
        })
        .catch(error => {
          console.log('Share failed:', error);
          // Fallback to clipboard
          copyToClipboard(shareUrl);
        });
    } else {
      // Fallback: copy to clipboard
      copyToClipboard(shareUrl);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // Show a brief visual feedback
      const shareButton = document.querySelector(
        '[title="Share"]'
      ) as HTMLElement;
      if (shareButton) {
        const originalColor = shareButton.style.color;
        shareButton.style.color = '#374151';
        setTimeout(() => {
          shareButton.style.color = originalColor;
        }, 1000);
      }
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    }
  };

  const handleInternalNavigation = (link: string) => {
    setIsNavigating(true);
    // reset the navigating state after a delay to show loading feedback
    setTimeout(() => {
      setIsNavigating(false);
    }, 1500);
  };

  const getPhaseColor = (phase: string) => {
    switch (phase.toLowerCase()) {
      case 'planning':
        return 'bg-green-100 text-green-800';
      case 'active state of research':
        return 'bg-blue-100 text-blue-800';
      case 'research complete':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const isInternalLink = (link: string) => {
    return link.startsWith('/') && !link.startsWith('//');
  };

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div
        className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-custom-blue/30 ${
          isNavigating
            ? 'transform scale-95 opacity-90'
            : 'hover:transform hover:scale-[1.02]'
        }`}>
        {/* Header with phase indicator */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <span
              className={`text-xs font-medium px-2 py-1 rounded-full ${getPhaseColor(
                phase
              )}`}>
              {phase}
            </span>
            <div className="flex items-center space-x-2">
              <button
                onClick={handleBookmark}
                className={`p-1 rounded-full transition-colors ${
                  isBookmarked
                    ? 'text-yellow-500 hover:text-yellow-600'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
                title={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}>
                <FontAwesomeIcon icon={faBookmark} className="w-4 h-4" />
              </button>
              <button
                onClick={handleShare}
                className="p-1 rounded-full text-gray-400 hover:text-gray-600 transition-colors"
                title="Share">
                <FontAwesomeIcon icon={faShare} className="w-4 h-4" />
              </button>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-custom-blue-dark transition-colors">
            {item.name}
          </h3>

          {item.description && (
            <p className="text-sm text-gray-600 line-clamp-2">
              {item.description}
            </p>
          )}
        </div>

        {/* Action buttons */}
        <div className="p-4">
          <div className="flex flex-wrap gap-2 mb-3">
            {item.buttons?.map((button, index) => {
              const isInternal = isInternalLink(button.link);

              if (isInternal) {
                return (
                  <Link
                    key={index}
                    href={button.link}
                    onClick={() => handleInternalNavigation(button.link)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      button.text.toLowerCase().includes('launch')
                        ? 'bg-custom-blue text-white hover:bg-custom-blue-dark hover:scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                    } ${
                      isNavigating
                        ? 'opacity-70 cursor-wait'
                        : 'active:scale-95'
                    }`}>
                    {isNavigating ? (
                      <div className="w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    ) : button.text.toLowerCase().includes('launch') ? (
                      <FontAwesomeIcon icon={faPlay} className="w-3 h-3" />
                    ) : (
                      <FontAwesomeIcon
                        icon={faInfoCircle}
                        className="w-3 h-3"
                      />
                    )}
                    <span>{isNavigating ? 'Loading...' : button.text}</span>
                  </Link>
                );
              } else {
                return (
                  <button
                    key={index}
                    onClick={() => window.open(button.link, '_blank')}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      button.text.toLowerCase().includes('launch')
                        ? 'bg-custom-blue text-white hover:bg-custom-blue-dark hover:scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                    } active:scale-95`}>
                    {button.text.toLowerCase().includes('launch') ? (
                      <FontAwesomeIcon icon={faPlay} className="w-3 h-3" />
                    ) : (
                      <FontAwesomeIcon
                        icon={faInfoCircle}
                        className="w-3 h-3"
                      />
                    )}
                    <span>{button.text}</span>
                    <FontAwesomeIcon
                      icon={faExternalLinkAlt}
                      className="w-3 h-3"
                    />
                  </button>
                );
              }
            })}
          </div>

          {/* External link */}
          {item.externalLink && (
            <div className="flex justify-end">
              <a
                href={item.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-custom-blue-dark hover:text-custom-blue-dark/80 transition-colors">
                <span>Visit Service</span>
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  className="ml-1 w-3 h-3"
                />
              </a>
            </div>
          )}
        </div>

        {/* Enhanced hover indicator */}
        {isHovered && (
          <div className="absolute top-2 right-2 bg-custom-blue text-white text-xs px-2 py-1 rounded-full opacity-90 animate-pulse">
            <span>Quick Info</span>
          </div>
        )}

        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-custom-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </div>
  );
};

export default InteractiveServiceCard;
