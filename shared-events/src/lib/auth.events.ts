/**
 * Auth Events
 * Events related to authentication and user lifecycle
 */

export class UserRegisteredEvent {
  constructor(
    public readonly userId: string,
    public readonly email: string,
    public readonly tenantId: string,
    public readonly registeredAt: Date = new Date(),
  ) {}
}

export class UserLoggedInEvent {
  constructor(
    public readonly userId: string,
    public readonly email: string,
    public readonly tenantId: string,
    public readonly ipAddress?: string,
    public readonly userAgent?: string,
    public readonly loggedInAt: Date = new Date(),
  ) {}
}

export class UserLoggedOutEvent {
  constructor(
    public readonly userId: string,
    public readonly email: string,
    public readonly loggedOutAt: Date = new Date(),
  ) {}
}

export class PasswordChangedEvent {
  constructor(
    public readonly userId: string,
    public readonly email: string,
    public readonly changedAt: Date = new Date(),
  ) {}
}

export class PasswordResetRequestedEvent {
  constructor(
    public readonly userId: string,
    public readonly email: string,
    public readonly resetToken: string,
    public readonly expiresAt: Date,
    public readonly requestedAt: Date = new Date(),
  ) {}
}

export class EmailVerifiedEvent {
  constructor(
    public readonly userId: string,
    public readonly email: string,
    public readonly verifiedAt: Date = new Date(),
  ) {}
}

export class RefreshTokenRevokedEvent {
  constructor(
    public readonly userId: string,
    public readonly tokenId: string,
    public readonly revokedAt: Date = new Date(),
  ) {}
}

export class SuspiciousLoginAttemptEvent {
  constructor(
    public readonly email: string,
    public readonly ipAddress: string,
    public readonly reason: string,
    public readonly userAgent?: string,
    public readonly attemptedAt: Date = new Date(),
  ) {}
}
